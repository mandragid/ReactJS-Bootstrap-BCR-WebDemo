import "../Pages/pages.css";
import NavBar from "../components/NavBar"
import PaymentStep1 from "../components/PaymentStep1";

const PaymentPage1 = () => {
  return (
    <div>
      <NavBar />
      <div className="empty-header"></div>
      <PaymentStep1 />
    </div>
  );
};

export default PaymentPage1;