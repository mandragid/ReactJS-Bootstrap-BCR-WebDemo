import "../components/CarDetail.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Filter from "../components/Filter";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Twitch from "../img/twitch.png";
import UsersIcon from "../img/fi_users.png";
import Icon_Calendar from "../img/fi_calendar.png";
import axios from "axios";
import { API } from "../const/endpoint";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment/moment";

function CarDetail() {
  // Get car id
  const { id } = useParams();
  // Store car id to variable
  const carId = id;
  const [car, setCar] = useState({});
  const [orderId, setOrderId] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const dateStart = moment(startDate).format();
  const dateEnd = moment(endDate).format();
  const justStartDate = dateStart.substr(8, 2);
  const justEndDate = dateEnd.substr(8, 2);
  const rentDurations = justEndDate - justStartDate;
  // console.log(rentDurations);
  const totalPrice = car.price * rentDurations;

  // On Button 'Lanjutkan Pembayaran'
  const handleButtonPaymentCardDetail = () => {
    // Set dates and order id to local storage
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
    localStorage.setItem("orderId", orderId);

    // Get login Token
    const config = {
      headers: {
        access_token: localStorage.getItem("token"),
      },
    };

    // Payload format to get Order ID
    const payload = {
      start_rent_at: dateStart.substr(0, 10),
      finish_rent_at: dateEnd.substr(0, 10),
      car_id: carId,
    };
    // console.log(payload);

    // Post API, payload and config to get orderID
    axios
      .post(API.POST_CUSTOMER_ORDER, payload, config)
      .then((res) => {
        console.log(res);
        setOrderId(res.data.id);
      })
      .catch((err) => console.log(err.message));
  };

  // Remove dates and order id when user back to this page or refresh this page
  useEffect(() => {
    localStorage.removeItem("startDate");
    localStorage.removeItem("endDate");
    localStorage.removeItem("orderId");
  }, []);
  // console.log(orderId);
  console.log(typeof car.price);
  // Get Chosen car from Search Page by id
  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        // console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container-fluid NavContainer">
      <div className="container-fluid NavContainer">
        <Navbar expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="/">BCR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto LinkNav">
                <Nav.Link href="/">Our Services</Nav.Link>
                <Nav.Link href="/">Why Us</Nav.Link>
                <Nav.Link href="/">Testimonial</Nav.Link>
                <Nav.Link href="/">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* navbar end */}
      {/* search form */}
      <div className="container-fluid d-flex justify-content-center align-items-center filter-container-in-carDetail">
        <Filter />
      </div>
      {/* search form end */}
      {/* main content */}
      <div className="container-fluid packageDetail-and-card-carDetail-container">
        <div className="container MainContent ">
          <div className="row packageDetail-and-card-carDetail-container">
            <div className="col-12 col-md-6 col-sm-6 LeftSide order-2 order-sm-1 ">
              <h1>Tentang Paket</h1>
              <h1>Include</h1>
              <ul>
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
              <h1>Exclude</h1>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              <h1>Refund, Reschedule, Overtime</h1>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>

            {/* Card Car Detail */}
            {Object.entries(car).length ? (
              <div className="col-12 col-md-6 col-sm-6 RightSide order-1 order-sm-2 card-carDetail-container">
                <div className="col GambarDetail">
                  <img src={car.image} alt="Gambar Mobil" />
                </div>
                <div className="col carContent">
                  <h1 className="name-carDetail">{car.name ? car.name.charAt(0).toUpperCase() + car.name.slice(1) : null}</h1>
                  <img src={UsersIcon} className="userIcon-carDetail"></img>
                  {(() => {
                    if (car.category === "small") {
                      return <h1 className="category-carDetail">2-4 Orang</h1>;
                    } else if (car.category === "Medium") {
                      return <h1 className="category-carDetail">4-6 Orang</h1>;
                    } else if (car.category === "large") {
                      return <h1 className="category-carDetail">6-8 Orang</h1>;
                    } else {
                      return <h1 className="category-carDetail"> - </h1>;
                    }
                  })()}
                </div>

                {/* Date Picker */}
                <div className="date-picker">
                  <h6>Tentukan Lama Sewa Mobil (Max 7 Hari)</h6>
                  <DatePicker
                    className="date"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    maxDate={addDays(startDate, 7)}
                    placeholderText="Pilih Tanggal Mulai dan Akhir Sewa"
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    isClearable={true}
                  />
                  {/* Calendar Icon on Date Picker */}
                  <div className="icon-calendar-cardDetail">
                    <img src={Icon_Calendar}></img>
                  </div>
                </div>

                {/* Car rent price per day */}
                <div className="row totalPrice-container-carDetail">
                  <h1 className="totalPrice-carDetail">Total</h1>
                  {(() => {
                    if (rentDurations === 0) {
                      return <h1 className="totalPriceNumber-carDetail">Rp {car.price}</h1>;
                    } else if (!totalPrice) {
                      return <h1 className="totalPriceNumber-carDetail">Rp 0</h1>;
                    } else if (rentDurations > 0) {
                      return <h1 className="totalPriceNumber-carDetail">Rp {car.price * rentDurations}</h1>;
                    }
                  })()}
                </div>

                {/* Protect 'Lanjutkan Pembayaran' Button */}
                <div className={startDate && endDate ? "btn-payment-cardDetail-on" : "btn-payment-cardDetail-off"}>
                  {/* Navigate to payment1 page and Transfer orderId  */}
                  <Link to={`/payment1/${orderId}`} className={startDate && endDate ? "" : "disabledLink"}>
                    <button onClick={handleButtonPaymentCardDetail}>Lanjutkan Pembayaran</button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* main content end */}
      {/* footer */}
      <div className="container-fluid bottomsection">
        <div className="container Footer">
          <div className="row">
            <div className="col-md-3">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-3">
              <p>Our services</p>
              <p>Why Us</p>
              <p>Testimonial</p>
              <p>FAQ</p>
            </div>
            <div className="col-md-3">
              <p>Connect With Us</p>
              <div className="Logos">
                <img src={Facebook} alt="icon" />
                <img src={Instagram} alt="icon" />
                <img src={Twitter} alt="icon" />
                <img src={Email} alt="icon" />
                <img src={Twitch} alt="icon" />
              </div>
            </div>
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </div>
      {/* end of footer */}
    </div>
  );
}

export default CarDetail;
