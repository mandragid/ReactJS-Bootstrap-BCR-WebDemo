import "../components/NavBar.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Mercy from "../img/mercy.png";
import RegisterCustomer from "../Pages/RegisterCustomer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NavBar() {
  return (
    <div className="container-fluid Wrapper">
      {/* Navigation Bar */}
      <div className="container-fluid">
        <Navbar expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="/">BCR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto LinkNav">
                <Nav.Link href="#Services">Our Services</Nav.Link>
                <Nav.Link href="#WhyUs">Why Us</Nav.Link>
                <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                <Nav.Link href="#FAQ">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* End of Navigation Bar */}

      {/* Hero Content */}
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
              <a
                href="/cari-mobil"
                className="btn btn-primary TombolHero rounded-pill"
              >
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <img className="w-100" src={Mercy} alt="Mercy"></img>
          </div>
        </div>
      </div>
      {/* End of Hero Content */}
    </div>
  );
}

export default NavBar;
