import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PaymentStep3 from "../components/PaymentStep3";
import useFileDownloader from "../hoc/useFileDownloader";
import success from "../img/success.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {saveAs} from "file-saver";

const TicketPage = () => {
  const [downloadFile, downloaderComponentUI] = useFileDownloader();
  const [car, setCar] = useState('')
  const [ticket, setTicket] = useState('')
  console.log(ticket)

const orderId = 2190
console.log(orderId);

  const files = [
    {
      thumb:
      ticket,
      file:
        ticket +
        Math.random(),
      filename: "images.jpg",
    }
  ];
  console.log(files)

  const download = (file) => downloadFile(file);

  useEffect(() => {
    const config = {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      };
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${orderId}`,config)
      .then((res) => {
        setTicket(res.data.slip);
        setCar(res.data.Car.name)
        console.log(res)
      })
      .catch((err) => console.log(err.message));
  }, []);

    const handleClick = ()=>{
        let url = ticket
        saveAs(url, ticket);
    }

  return (
    <>
    <NavBar />
      <div className="empty-header"></div>
      <PaymentStep3 />
        <div className="payment-alert">
          <img src={success} alt="success"></img>
          <h3>Pembayaran Berhasil!</h3>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
      <div className="row">
        <div className="col text-center">
          <div className="row mt-3">
            {files.map((file, idx) => (
              <div className="col" key={idx}>
                <div className="card card-ticket">
                  <div className="card-body card-body-ticket" key={idx}>
                  <h4>Invoice</h4>
                  <h5>{car}</h5>
                  <Link className="btn-download" alt="download" onClick={handleClick}>
                    Unduh
                  </Link>
                    <img className="card-img-top" alt="card-img" src={file.thumb} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {downloaderComponentUI}
      </div>
      <Footer />
    </>
  );
};

export default TicketPage;
