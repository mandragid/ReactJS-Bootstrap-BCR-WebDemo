import "../components/SearchCar.css";
import React from "react";
import NavBar from "../components/NavBar";
import Mercy from "../img/mercy.png";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Twitch from "../img/twitch.png";

function SearchCar() {
	return (
		<div className="topsection">
			<NavBar />

			{/* Hero Content */}
			<div className="container-fluid HeroCM">
				<div className="row align-items-center flex-md-row">
					<div className="col-md-12 col-lg-6 d-flex justify-content-center ">
						<div className="col-md-12  text-md-left HeroContent">
							<h1 className="JudulHero">Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
							<p className="CaptionHero">
								Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
							</p>
						</div>
					</div>
					<div className="col-md-12 col-lg-6 p-0">
						<img className="w-100" src={Mercy}></img>
					</div>
				</div>
			</div>

			{/* End of Hero Content */}

			{/* Form Cari */}
			<div className="middlesection">
				<div className="container-fluid d-flex justify-content-center align-items-center ContainerFormSewa">
					<div className="container FormSewa d-flex align-items-center justify-content-center shadow p-5 mb-5 bg-white rounded">
						<div className="row">
							<div className="col-sm-12 col-md-6 col-xl-2 text-center mb-3">
								<p>Nama Mobil</p>
								<Form.Control className="text-center" id="FormControl" type="text" placeholder="Nama/Jenis Mobil" />
							</div>

							<div className="col-sm-12 col-md-6 col-xl-3 text-center mb-3">
								<p>Kategori</p>
								<DropdownButton id="dropdown-basic-button" title="Masukkan Kapasitas Mobil">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>
							<div className="col-sm-12 col-md-6 col-xl-3 text-center mb-3">
								<p>Harga</p>
								<DropdownButton id="dropdown-basic-button" title="Masukkan Harga Sewa/Hari">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>
							<div className="col-sm-12 col-md-6 col-xl-2 text-center mb-3">
								<p>Status</p>
								<DropdownButton id="dropdown-basic-button" title="Disewa/Ready">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>

							<div className="col-sm-12 col-md-12 col-xl-2 text-center justify-content-center BtnCariMobil">
								<a href="/hasil-pencarian" className="btn btn-success text-center">
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

export default SearchCar;