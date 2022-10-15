import "../components/CariMobil.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Mercy from "../img/mercy.png";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Twitch from "../img/twitch.png";

function CariMobil() {
	return (
		<div className="topsection">
			<div className="container-fluid WrapperCM">
				<div className="container">
					<Navbar expand="lg" variant="light">
						<Container>
							<Navbar.Brand href="#home">BCR</Navbar.Brand>
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
				<div className="container-fluid HeroCM">
					<div className="row align-items-center flex-md-row">
						<div className="col-md-6 d-flex justify-content-center ">
							<div className="col-md-8  text-md-left HeroContent">
								<h1 className="JudulHero">Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
								<p className="CaptionHero">
									Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
								</p>
							</div>
						</div>
						<div className="col-md-6 p-0">
							<img className="w-100" src={Mercy}></img>
						</div>
					</div>
				</div>
			</div>
			{/* End of Hero Content */}

			{/* Form Cari */}
			<div className="middlesection">
				<div className="container-fluid d-flex justify-content-center align-items-center ContainerFormSewa">
					<div className="container FormSewa d-flex align-items-center justify-content-center shadow p-3 mb-5 bg-white rounded">
						<div className="row">
							<div className="col">
								<p>Nama Mobil</p>
								<Form.Control type="text" placeholder="Nama/Jenis Mobil" />
							</div>

							<div className="col">
								<p>Kategori</p>
								<DropdownButton className="DropdownButton" id="dropdown-basic-button" title="Masukkan Kapasitas Mobil">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>
							<div className="col">
								<p>Harga</p>
								<DropdownButton id="dropdown-basic-button" title="Masukkan Harga Sewa/Hari">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>
							<div className="col">
								<p>Status</p>
								<DropdownButton id="dropdown-basic-button" title="Disewa">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>

							<div className="col">
								<a href="#" className="btn btn-primary ButtonCariMobil">
									Cari Mobil
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end of form cari */}

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

export default CariMobil;
