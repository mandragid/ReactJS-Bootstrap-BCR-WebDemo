import "../components/payBefore.css";

const PayBefore = () => {
  return (
    <div className="payBefore-outer-container">
      <div className="payBefore-inner-container">
        <div className="payBefore-txt-container">
          <div className="payBefore-heading">
            <h1>Selesaikan Pembayaran Sebelum</h1>
          </div>
          <div className="payBefore-subHeading">
            <h6>Rabu, 19 Mei 2022 jam 13.00 WIB</h6>
          </div>
        </div>
        <div className="deadline-container">
          <div className="deadline-hour">12</div>
          <div className="deadline-minute">59</div>
          <div className="deadline-second">59</div>
        </div>
      </div>
    </div>
  );
};

export default PayBefore;
