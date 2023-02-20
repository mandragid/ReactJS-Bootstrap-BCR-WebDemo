import "../components/paymentInstruction.css";
import React, { useState, useEffect } from "react";

const PaymentInstruction = () => {
  const [payment1, setPayment1] = useState(false);
  const [payment2, setPayment2] = useState(false);
  const [payment3, setPayment3] = useState(false);
  const [payment4, setPayment4] = useState(false);
  const bankBCA = localStorage.getItem("BCA");
  const bankBNI = localStorage.getItem("BNI");
  const bankMandiri = localStorage.getItem("Mandiri");

  useEffect(() => {
    setPayment1(true)
  }, [])
  

  const handlePayment1 = () => {
    setPayment1(true);
    setPayment2(false);
    setPayment3(false);
    setPayment4(false);
  };
  const handlePayment2 = () => {
    setPayment2(true);
    setPayment1(false);
    setPayment3(false);
    setPayment4(false);
  };
  const handlePayment3 = () => {
    setPayment3(true);
    setPayment1(false);
    setPayment2(false);
    setPayment4(false);
  };
  const handlePayment4 = () => {
    setPayment4(true);
    setPayment1(false);
    setPayment2(false);
    setPayment3(false);
  };

  // console.log(payment2);
  return (
    <div className="paymentInstruction-container">
      <div className="mainHeading-paymentInstruction">
        <h1>Instruksi Pembayaran</h1>
      </div>
      {(() => {
        if (bankBCA === "false") {
          return (
            <div>
              <div className="paymentMethod-container">
                <div className="payment1">
                  <h6 className={payment1 ? "bank-active" : "bank-inactive"} onClick={handlePayment1}>
                    ATM BCA
                  </h6>
                </div>
                <div className="payment2">
                  <h6 className={payment2 ? "bank-active" : "bank-inactive"} onClick={handlePayment2}>
                    M-BCA
                  </h6>
                </div>
                <div className="payment3">
                  <h6 className={payment3 ? "bank-active" : "bank-inactive"} onClick={handlePayment3}>
                    BCA Klik
                  </h6>
                </div>
                <div className="payment4">
                  <h6 className={payment4 ? "bank-active" : "bank-inactive"} onClick={handlePayment4}>
                    Internet Banking
                  </h6>
                </div>
              </div>
            </div>
          );
        } else if (bankBNI === "false") {
          return (
            <div>
              <div className="paymentMethod-container">
                <div className="payment1">
                  <h6 onClick={handlePayment1}>ATM BNI</h6>
                </div>
                <div className="payment2">
                  <h6 onClick={handlePayment2}>M-BNI</h6>
                </div>
                <div className="payment3">
                  <h6 onClick={handlePayment3}>BNI Tapcash</h6>
                </div>
                <div className="payment4">
                  <h6 onClick={handlePayment4}>Internet Banking</h6>
                </div>
              </div>
            </div>
          );
        } else if (bankMandiri === "false") {
          return (
            <div>
              <div className="paymentMethod-container">
                <div className="payment1">
                  <h6 onClick={handlePayment1}>ATM Mandiri</h6>
                </div>
                <div className="payment2">
                  <h6 onClick={handlePayment2}>Livin-Mandiri</h6>
                </div>
                <div className="payment3">
                  <h6 onClick={handlePayment3}>VA Mandiri</h6>
                </div>
                <div className="payment4">
                  <h6 onClick={handlePayment4}>Internet Banking</h6>
                </div>
              </div>
            </div>
          );
        }
      })()}
      {(() => {
        if (payment1 === true) {
          return (
            <div>
              <div className="instructions ATM-BCA">
                <ul>
                  <li>Masukkan kartu ATM, lalu PIN</li>
                  <li>Pilh menu “Transaksi Lainnya” - “Transfer” - "“Ke Rek BCA Virtual Account”" </li>
                  <li>
                    Masukkan nomor BCA Virtual Account: 70020+Order ID <br></br>Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
                  </li>
                  <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                  <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                </ul>
              </div>
            </div>
          );
        } else if (payment2 === true) {
          return (
            <div>
              <div className="instructions M-BCA">
                <ul>
                  <li>Login dengan akun M-banking Anda</li>
                  <li>Pilih menu “M-Transfer”, pilih “BCA Virtual Account” </li>
                  <li>
                    Input Kode Virtual Account: 39107+20+NRP <br></br> Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
                  </li>
                  <li>Klik menu “Simpan Daftar Transfer” untuk menyimpan nomor pembayaran</li>
                  <li>Klik OK kemudian Kirim / Send</li>
                  <li>Input PIN BCA untuk mengotorisasi</li>
                  <li>Ikuti instruksi untuk menyelesailkan transaksi</li>
                </ul>
              </div>
            </div>
          );
        } else if (payment3 === true) {
          return (
            <div>
              <div className="instructions BCA-klik">
                <ul>
                  <li>Buka halaman BCAKlikPay</li>
                  <li>Pilih menu Registrasi</li>
                  <li>Baca Syarat dan Ketentuan</li>
                  <li>Isi data dengan benar</li>
                  <li>Pilih sumber dana pembayaran. Untuk saat ini DTKP hanya mendukung metode pembayaran BCA KlikPay dengan sumber dana dari KlikBCA</li>
                  <li>Anda akan menerima kode aktivasi lewat email dan SMS</li>
                </ul>
              </div>
            </div>
          );
        } else if (payment4 === true) {
          return (
            <div>
              <div className="instructions Internet-Banking">
                <ul>
                  <li>Login ke KlikBCA Individual</li>
                  <li>Pilih Menu “Transfer”</li>
                  <li>Pilih Menu “Transfer ke BCA Virtual Account”</li>
                  <li>
                    Input Kode Virtual Account: 39107+20+NRP <br></br>Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
                  </li>
                  <li>Pilih “Lanjutkan” untuk melanjutkan pembayaran</li>
                  <li>Masukkan Respon KeyBCA Apply 1</li>
                  <li>Ikuti instruksi untuk menyelesaikan transaksi</li>
                </ul>
              </div>
            </div>
          );
        }
      })()}

      {/* <div className="instructions ATM-BCA">
        <ul>
          <li>Masukkan kartu ATM, lalu PIN</li>
          <li>Pilh menu “Transaksi Lainnya” - “Transfer” - "“Ke Rek BCA Virtual Account”" </li>
          <li>
            Masukkan nomor BCA Virtual Account: 70020+Order ID <br></br>Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
          </li>
          <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
          <li>Ambil dan simpanlah bukti transaksi tersebut</li>
        </ul>
      </div> */}
    </div>
  );
};

export default PaymentInstruction;
