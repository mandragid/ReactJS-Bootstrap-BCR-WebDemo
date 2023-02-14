import "../components/bankPayment.css";
import LineIcon2 from "../img/icon_line-2.png";

const BankPayment = () => {
  return (
    <div className="bankPayment-container">
      <div className="heading-container">
        <h1>Pilih Bank Transfer</h1>
      </div>
      <div className="bankPayment-sub-heading-container">
        <h3>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</h3>
      </div>
      <div className="bank-container">
        <div className="bank-name">
          <h6>BCA</h6>
        </div>
        <div className="txt-bank-container">
          <h6>BCA Transfer</h6>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
      <div className="bank-container">
        <div className="bank-name">
          <h6>BNI</h6>
        </div>
        <div className="txt-bank-container">
          <h6>BNI Transfer</h6>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
      <div className="bank-container">
        <div className="bank-name">
          <h6>Mandiri</h6>
        </div>
        <div className="txt-bank-container">
          <h6>Mandiri Transfer</h6>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
    </div>
  );
};

export default BankPayment;
