import "../components/cardPaymentDetail.css";
import Accordion from "react-bootstrap/Accordion";
import carCapacity from "../img/fi_users.png";
import lineIcon from "../img/icon_line-3.png";

const CardPaymentDetail = () => {
  return (
    <div className="cardPaymentDetail-container">
      <div className="cardPaymentDetail-heading firstHeading">
        <h1>Innova</h1>
      </div>
      <div className="carCapacity-container">
        <div className="cardPaymentDetail-icon-user">
          <img src={carCapacity}></img>
        </div>
        <div className="carCapacity">
          <h6>6-8 orang</h6>
        </div>
      </div>
      <Accordion className="accordion-cardPayment" defaultActiveKey={["0"]} alwaysOpen flush>
        <Accordion.Item eventKey="0" className="accordion-item">
          <Accordion.Header className="accordion-header-cardPayment">
            <span className="txt-heading heading-accordion accordion-cardPayment">Total</span>
            <span className="first-boldPrice">Rp 3.500.000</span>
          </Accordion.Header>
          <Accordion.Body className="body accordion-body-cardPayment">
            <div className="cardPaymentDetail-heading secondHeading">
              <h1>Harga</h1>
            </div>
            <div className="rentDays-container">
              <div className="cardPaymentDetail-subHeading second-subHeading">
                <ul>
                  <li>Sewa Mobil Rp 500.000 x 7 hari</li>
                </ul>
              </div>
              <div className="price">
                <h6>Rp 3.500.000</h6>
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
                <h6>Rp 3.500.000</h6>
              </div>
            </div>
            <div className="paymentButton-container">
              <button>
                <span>Bayar</span>
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CardPaymentDetail;
