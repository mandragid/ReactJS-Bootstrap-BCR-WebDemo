import "../components/CarDetail.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Twitch from "../img/twitch.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filter from "../components/Filter";

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
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
      <div className="container-fluid d-flex justify-content-center align-items-center ContainerFormSewa">
        <Filter />
      </div>
      {/* search form end */}
      {/* main content */}
      <div className="container-fluid ">
        <div className="container MainContent">
          <div className="row">
            <div className="col-12 col-sm-6 LeftSide order-2 order-sm-1">
              <h1>Tentang Paket</h1>
              <h1>Include</h1>
              <ul>
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
              <h1>Exclude</h1>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              <h1>Refund, Reschedule, Overtime</h1>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>

            {Object.entries(car).length ? (
              <div className="col-12 col-sm-6 RightSide order-1 order-sm-2">
                <div className="col GambarDetail">
                  <img src={car.image} alt="Gambar Mobil" />
                </div>
                <div className="col">
                  <h1>{car.name}</h1>
                  <p>{car.category}</p>
                </div>
                <div className="row">
                  <div className="col">
                    <p>Total</p>
                  </div>
                  <div className="col">
                    <p>{car.price}</p>
                  </div>
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
