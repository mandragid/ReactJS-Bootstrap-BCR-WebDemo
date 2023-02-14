import "../components/paymentStep.css";
import BackIcon from "../img/fi_arrow-left.png";
import Number1BlueIcon from "../img/icon_number-1-blue.png";
import Number2Icon from "../img/icon_number-2.png";
import Number3Icon from "../img/icon_number-3.png";
import LineIcon from "../img/icon_line.png";
import { useNavigate } from "react-router-dom";

const PaymentStep1 = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="paymentStep-container">
      <div className="paymentStepContent-container">
        <div className="paymentStep-left-content">
          <div className="back-icon">
            <button onClick={goBack}>
              <img src={BackIcon} alt="back-icon"></img>
            </button>
          </div>
          <div className="txt-pembayaran">
            <h1>Pembayaran</h1>
          </div>
        </div>
        <div className="paymentStep-right-content">
          <div className="icon-number icon-number1">
            <img src={Number1BlueIcon} alt="number-1-icon"></img>
          </div>
          <div className="txt-paymentStep">
            <h3>Pilih Metode</h3>
          </div>
          <div className="icon-line">
            <img src={LineIcon} alt="line-icon"></img>
          </div>
          <div className="icon-number icon-number2">
            <img src={Number2Icon} alt="number-2-icon"></img>
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

export default PaymentStep1;
