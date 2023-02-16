import "../components/paymentConfirmation.css";

const PaymentConfirmation = () => {
  return (
    <div className="paymentConfirmation-container">
      <div className="txt-paymentConfirmation">
        <h1>Klik Konfirmasi Pembayaran untuk mempercepat proses pengecekan</h1>
      </div>
      <div className="btn-paymentConfirmation">
        <button>Konfirmasi Pembayaran</button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
