import "../components/paymentInstruction.css";

const PaymentInstruction = () => {
  return (
    <div className="paymentInstruction-container">
      <div className="mainHeading-paymentInstruction">
        <h1>Instruksi Pembayaran</h1>
      </div>
      <div className="paymentMethod-container">
        <div className="atm">
          <h6>ATM BCA</h6>
        </div>
        <div className="atm">
          <h6>M-BCA</h6>
        </div>
        <div className="atm">
          <h6>BCA Klik</h6>
        </div>
        <div className="atm">
          <h6>Internet Banking</h6>
        </div>
      </div>
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
      {/* <div className="instructions M-BCA">
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
      </div> */}
    </div>
  );
};

export default PaymentInstruction;
