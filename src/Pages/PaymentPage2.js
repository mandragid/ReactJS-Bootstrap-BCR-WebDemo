import NavBar from "../components/NavBar";
import PaymentStep2 from "../components/PaymentStep2";
import PayBefore from "../components/PayBefore";
import PaymentConfirmation from "../components/PaymentConfirmation";
import "../Pages/pages.css";

const PaymentPage2 = () => {
  return (
    <div>
      <NavBar />
      <div className="empty-header"></div>
      <PaymentStep2 />
      <div className="outer-container-for-payBefore-and-paymentConfirmation">
        <div className="inner-container-for-payBefore-and-paymentConfirmation">
          <PayBefore />
          <PaymentConfirmation />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage2;
