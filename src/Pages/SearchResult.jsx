import "../components/SearchResult.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Twitch from "../img/twitch.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

function SearchResult(props) {
  const [carData, setCardata] = useState([]);
  const [fName, setFname] = useState("");
  const [fCategory, setFcategory] = useState("");
  const [fmaxPrice, setFmaxprice] = useState("");
  const [fminPrice, setFminprice] = useState("");
  const [fstatus, setFstatus] = useState("");

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
      .then((res) => {
        setCardata(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleChangeName = (e) => {
    setFname(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setFcategory(e);
    console.log(e);
  };
  const handleMaxPrice = (e) => {
    setFmaxprice(e);
    console.log(e);
  };
  const handleMinPrice = (e) => {
    setFminprice(e);
    console.log(e);
  };

  const handleStatus = (e) => {
    setFstatus(e);
    console.log(e);
  };
  const handleFilter = (e) => {
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&maxPrice=${fmaxPrice}&minPrice=${fminPrice}&isRented=${fstatus}`
      )
      .then((res) => {
        setCardata(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container-fluid NavContainer">
      <div className="container-fluid NavContainer">
        <Navbar expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="/">BCR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto LinkNav">
                <Nav.Link href="/">Our Services</Nav.Link>
                <Nav.Link href="/">Why Us</Nav.Link>
                <Nav.Link href="/">Testimonial</Nav.Link>
                <Nav.Link href="/">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* end of navigation bar */}
      <Filter
        handleChangeName={handleChangeName}
        handleFilter={handleFilter}
        fCategory={fCategory}
        handleChangeCategory={handleChangeCategory}
        handleMaxPrice={handleMaxPrice}
        fmaxPrice={fmaxPrice}
        handleMinPrice={handleMinPrice}
        fminPrice={fminPrice}
        handleStatus={handleStatus}
        fstatus={fstatus}
      />
      {/* end of searchform */}

      {/* start of search result */}

      <div className="container-fluid">
        <div className="container d-flex justify-content-center">
          <div className="row d-flex justify-content-center">
            {/* card result */}
            {!!carData.length
              ? carData.map((item) => (
                  <div className="col-sm-12 col-md-6  ResultCard">
                    <div className="col CarImage">
                      <img src={item.image} />
                    </div>
                    <div className="col">
                      <p className="NamaMobil">{item.name}</p>
                      <p className="HargaMobil">{item.price}</p>
                      <p className="DescMobil">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                    <div className="col">
                      <Link to={`/detail-paket/${item.id}`}>
                        <a
                          href="/detail-paket"
                          className="btn btn-success text-center BtnPilihMobil"
                        >
                          <h1 className="CaptPilihMobil">Pilih Mobil</h1>
                        </a>{" "}
                      </Link>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      {/* end of search result */}

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

export default SearchResult;
