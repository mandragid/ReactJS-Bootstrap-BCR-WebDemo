import "../components/paymentTransfer.css";
import copyToClipboard from "../img/fi_copy.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const PaymentTransfer = () => {
  // const [inputValue, setInputValue] = useState("");
  const { id } = useParams();
  const [totalPrice, setTotalPrice] = useState();


  useEffect(() => {
    const config = {
      headers: {
        access_token: localStorage.getItem("token"),
      },
    };

    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, config)
      .then((res) => {
        // console.log(res.data);
        setTotalPrice("Rp " + res.data.total_price);
      })
      .catch((err) => console.log(err.message));
  }, []);


  return (
    <div className="paymentTransfer-container">
      <div className="heading-paymentTransfer">
        <h1>Lakukan Transfer Ke</h1>
      </div>
      <div className="bankLogo-paymentTransfer">
        <h6>BCA</h6>
      </div>
      <div className="container-for-bankName-and-sender-paymentTransfer">
        <div className="bankName-paymentTransfer">
          <h6>BCA Transfer</h6>
        </div>
        <div className="senderName">
          <h6>A.N Binar Car Rental</h6>
        </div>
      </div>
      <div className="heading-account-number">
        <h6>Nomor Rekening</h6>
      </div>
      <div className="account-number">
        <div className="number">
          <p>{54104257877}</p>
        </div>
        <div className="btn-copy-container">
          <CopyToClipboard text={54104257877}>
            <button className="btn-copy btn-copy-accountNumber">
              <img src={copyToClipboard} alt="icon-copy-to-clipboard"></img>
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="heading-moneyToSend">
        <h6>Total Bayar</h6>
      </div>
      <div className="moneyToSend">
        <div className="money">
          <p>{totalPrice}</p>
        </div>
        <div className="btn-copy-container">
          <CopyToClipboard text={totalPrice}>
            <button className="btn-copy btn-copy-moneyToSend">
              <img src={copyToClipboard} alt="icon-copy-to-clipboard"></img>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default PaymentTransfer;
