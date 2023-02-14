import "../Pages/pages.css";
import NavBar from "../components/NavBar";
import PaymentStep1 from "../components/PaymentStep1";
import OrderDetail from "../components/OrderDetail";
import BankPayment from "../components/BankPayment";
import CardPaymentDetail from "../components/CardPaymentDetail";
import Footer from "../components/Footer";

const PaymentPage1 = () => {
  return (
    <div>
      <NavBar />
      <div className="empty-header"></div>
      <PaymentStep1 />
      <OrderDetail />
      <div className="outer-containerForBankPayment-and-CardPaymentDetail">
        <div className="inner-containerForBankPayment-and-CardPaymentDetail">
          <BankPayment />
          <CardPaymentDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage1;
