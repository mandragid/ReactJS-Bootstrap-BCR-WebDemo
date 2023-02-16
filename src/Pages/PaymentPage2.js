import NavBar from "../components/NavBar";
import PaymentStep2 from "../components/PaymentStep2";
import "../Pages/pages.css";

const PaymentPage2 = () => {
  return (
    <div>
      <NavBar />
      <div className="empty-header"></div>
      <PaymentStep2 />
    </div>
  );
};

export default PaymentPage2;
