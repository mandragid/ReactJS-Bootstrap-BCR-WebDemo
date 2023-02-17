import React from "react";
import Footer from "../components/Footer";
import useFileDownloader from "../hoc/useFileDownloader";
import success from "../img/success.png";
import { Link } from "react-router-dom";

const files = [
  {
    thumb:
      "https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w",
    file:
      "https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?rnd=" +
      Math.random(),
    filename: "images.jpg",
  }
];

const TicketPage = () => {
  const [downloadFile, downloaderComponentUI] = useFileDownloader();

  const download = (file) => downloadFile(file);

  return (
    <>
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
                  <h5>*no invoice</h5>
                  <Link className="btn-download" alt="download" onClick={() => download(file)}>
                    Download
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
