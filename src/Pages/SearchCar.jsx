import "../components/SearchCar.css";
import React from "react";
import NavBar from "../components/NavBar";
import Mercy from "../img/mercy.png";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Twitch from "../img/twitch.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../components/Filter";

function SearchCar() {
  const [carData, setCardata] = useState([]);
  const [fName, setFname] = useState("");
  const [fCategory, setFcategory] = useState("");

  const handleChangeName = (e) => {
    setFname(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setFcategory(e.target.value);
  };

  const handleFilter = (e) => {
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}`
      )
      .then((res) => {
        setCardata(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="topsection">
      <NavBar />

      {/* Hero Content */}
      <div className="container-fluid HeroCM mb-5">
        <div className="row align-items-center flex-md-row">
          <div className="col-md-12 col-lg-6 d-flex justify-content-center ">
            <div className="col-md-12  text-md-left HeroContent">
              <h1 className="JudulHero">
                Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="CaptionHero">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 p-0">
            <img className="w-100" src={Mercy}></img>
          </div>
        </div>
      </div>

      {/* End of Hero Content */}

      {/* Form Filter */}
      <Filter
        handleChangeName={handleChangeName}
        handleFilter={handleFilter}
        fCategory={fCategory}
        handleChangeCategory={handleChangeCategory}
      />

      {/* end of form Filter */}

      {/* footer */}

      <div className="container-fluid bottomsection">
        <div className="container Footer">
          <div className="row">
            <div className="col-md-3">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-3">
              <p>Our services</p>
              <p>Why Us</p>
              <p>Testimonial</p>
              <p>FAQ</p>
            </div>
            <div className="col-md-3">
              <p>Connect With Us</p>
              <div className="Logos">
                <img src={Facebook} alt="icon" />
                <img src={Instagram} alt="icon" />
                <img src={Twitter} alt="icon" />
                <img src={Email} alt="icon" />
                <img src={Twitch} alt="icon" />
              </div>
            </div>
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </div>
      {/* end of footer */}
    </div>
  );
}

export default SearchCar;
