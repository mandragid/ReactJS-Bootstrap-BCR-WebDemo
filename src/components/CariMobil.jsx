import "../components/CariMobil.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Mercy from "../img/mercy.png";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

function CariMobil() {
	return (
		<div className="container-fluid Wrapper">
			{/* Navigation Bar */}
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
			<div className="container-fluid Hero">
				<div className="row align-items-center flex-md-row">
					<div className="col-md-6 d-flex justify-content-center ">
						<div className="col-md-8  text-md-left HeroContent">
							<h1 className="JudulHero">Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
							<p className="CaptionHero">
								Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
							</p>
							<a href="#" className="btn btn-primary TombolHero rounded-pill">
								Mulai Sewa Mobil
							</a>
						</div>
					</div>
					<div className="col-md-6 p-0">
						<img className="w-100" src={Mercy}></img>
					</div>
				</div>
			</div>
			{/* End of Hero Content */}

			<div className="container-fluid d-flex justify-content-center">
				<div className="FormSewa">
					<div className="row">
						<div className="col">
							<p>Nama Mobil</p>
							<Form.Control type="text" placeholder="Normal text" />
						</div>

						<div className="col">
							<p>Kategori</p>
							<DropdownButton id="dropdown-basic-button" title="Masukkan Kapasitas Mobil">
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
							<Button variant="primary">Cari Mobil</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CariMobil;
