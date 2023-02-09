import "../components/HeroContent.css";
import Mercy from "../img/mercy.png";
import Button from "react-bootstrap/Button";

function HeroContent() {
  return (
    <div className="container-fluid Hero">
      <div className="row align-items-center flex-md-row">
        <div className="col-md-6 d-flex justify-content-center ">
          <div className="col-md-8  text-md-left HeroContent">
            <h1 className="JudulHero">
              Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="CaptionHero">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Button href="/cari-mobil" variant="success">
              Mulai Sewa Mobil
            </Button>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <img className="w-100" src={Mercy}></img>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
