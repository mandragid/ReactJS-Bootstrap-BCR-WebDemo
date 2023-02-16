import "../components/paymentStep.css";
import BackIcon from "../img/fi_arrow-left.png";
import CheckIcon from "../img/fi_check.png";
import Number2BlueIcon from "../img/icon_number-2-blue.png";
import Number3Icon from "../img/icon_number-3.png";
import LineIcon from "../img/icon_line.png";

const PaymentStep2 = () => {
  return (
    <div className="paymentStep-container">
      <div className="paymentStepContent-container">
        <div className="paymentStep-left-content">
          <div className="back-icon">
            <button>
              <img src={BackIcon} alt="back-icon"></img>
            </button>
          </div>
          <div className="bankChosen-container">
            <div className="txt-pembayaran bankChosen">
              <h1>BCA Transfer</h1>
            </div>
            <div className="orderId">
              <h6>Order ID: 86754231</h6>
            </div>
          </div>
        </div>
        <div className="paymentStep-right-content">
          <div className="checklist-icon">
            <img src={CheckIcon} alt="checklist-icon"></img>
          </div>
          <div className="txt-paymentStep">
            <h3>Pilih Metode</h3>
          </div>
          <div className="icon-line">
            <img src={LineIcon} alt="line-icon"></img>
          </div>
          <div className="icon-number icon-number2">
            <img src={Number2BlueIcon} alt="number-2-icon"></img>
          </div>
          <div className="txt-paymentStep">
            <h3>Bayar</h3>
          </div>
          <div className="icon-line">
            <img src={LineIcon} alt="line-icon"></img>
          </div>
          <div className="icon-number icon-number3">
            <img src={Number3Icon} alt="number-2-icon"></img>
          </div>
          <div className="txt-paymentStep">
            <h3>Tiket</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep2;
