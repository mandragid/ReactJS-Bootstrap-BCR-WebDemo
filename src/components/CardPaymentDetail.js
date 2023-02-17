import "../components/cardPaymentDetail.css";
import Accordion from "react-bootstrap/Accordion";
import carCapacity from "../img/fi_users.png";
import lineIcon from "../img/icon_line-3.png";
import axios from "axios";
import { API } from "../const/endpoint";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import rootReducer from "../Redux";
import moment from "moment/moment";
import "moment/locale/id";

const CardPaymentDetail = () => {
  // const [selectedBank, setSelectedBank] = useState();
  // Get car id
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [orderId, setOrderId] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const dateStart = moment(localStorage.getItem("startDate"));
  const dateEnd = moment(localStorage.getItem("endDate"));
  const startDateOnly = dateStart.format().substr(8, 2);
  const endDateOnly = dateEnd.format().substr(8, 2);
  const rentDuration = endDateOnly - startDateOnly;
  const state = useSelector((rootReducer) => rootReducer);
  // console.log(state);

  // Previously, tried to get the chosen bank from localStorage
  // useEffect(() => {
  //   const selectedBank = localStorage.getItem("Bank");
  //   // setSelectedBank(localStorage.getItem("BCA"));
  //   // setSelectedBank(localStorage.getItem("BNI"));
  //   // setSelectedBank(localStorage.getItem("Mandiri"));
  // }, []);

  useEffect(() => {
    // Get login token
    const config = {
      headers: {
        access_token: localStorage.getItem("token"),
      },
    };

    // Get car data by id
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, config)
      .then((res) => {
        // console.log(res);
        setCar(res.data.Car);
        setTotalPrice(res.data.total_price);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="cardPaymentDetail-container">
      <div className="cardPaymentDetail-heading firstHeading">
        <h1>{car.name}</h1>
      </div>
      <div className="carCapacity-container">
        <div className="cardPaymentDetail-icon-user">
          <img src={carCapacity}></img>
        </div>
        <div className="carCapacity">
          <h6>{car.category}</h6>
        </div>
      </div>
      {/* Card's Accordion  */}
      <Accordion className="accordion-cardPayment" defaultActiveKey={["0"]} alwaysOpen flush>
        <Accordion.Item eventKey="0" className="accordion-item">
          <Accordion.Header className="accordion-header-cardPayment">
            <span className="txt-heading heading-accordion accordion-cardPayment">Total</span>
            <span className="first-boldPrice">Rp {totalPrice}</span>
          </Accordion.Header>
          <Accordion.Body className="body accordion-body-cardPayment">
            <div className="cardPaymentDetail-heading secondHeading">
              <h1>Harga</h1>
            </div>
            <div className="rentDays-container">
              <div className="cardPaymentDetail-subHeading second-subHeading">
                <ul>
                  <li>
                    Sewa Mobil {car.price} x {rentDuration} hari
                  </li>
                </ul>
              </div>
              <div className="price">
                <h6>{totalPrice}</h6>
              </div>
            </div>
            <div className="otherCost-container">
              <div className="cardPaymentDetail-heading thirdHeading">
                <h1>Biaya Lainnya</h1>
              </div>
              <ul className="cardPayment-ul">
                <div className="cardPayment-include-container-1">
                  <div className="cardPayment-tax">
                    <li>Pajak</li>
                  </div>
                  <div className="cardPayment-include firstInclude">
                    <h6>Termasuk</h6>
                  </div>
                </div>
                <div className="cardPayment-include-container-2">
                  <div className="cardPayment-driverMealCost">
                    <li>Biaya Makan Supir</li>
                  </div>
                  <div className="cardPayment-include secondInclude">
                    <h6>Termasuk</h6>
                  </div>
                </div>
              </ul>
            </div>
            <div className="otherCost-container">
              <div className="cardPaymentDetail-heading fourthHeading">
                <h1>Belum Termasuk</h1>
              </div>
              <ul className="cardPayment-ul">
                <li>Bensin</li>
                <li>Tol dan Parkir</li>
              </ul>
            </div>
            <div className="lineIcon-container">
              <img src={lineIcon}></img>
            </div>
            <div className="secondTotal-container">
              <div className="cardPaymentDetail-heading fifthHeading">
                <h1>Total</h1>
              </div>
              <div className=" second-boldPrice">
                <h6>{totalPrice}</h6>
              </div>
            </div>

            <div>
              {/* Condition to protect Bayar Button */}
              {(() => {
                if (state.bankReducer.isBankChosen === "BCA" || state.bankReducer.isBankChosen === "BNI" || state.bankReducer.isBankChosen === "Mandiri") {
                  return (
                    <div className="btn-cardPaymentDetail-on">
                      {/* Navigate to payment2 page and transfer orderId */}
                      <Link to={`/payment2/${orderId}/`}>
                        <button>
                          <span>Bayar</span>
                        </button>
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div className="btn-cardPaymentDetail-off">
                      <button>Bayar</button>
                    </div>
                  );
                }
              })()}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CardPaymentDetail;
