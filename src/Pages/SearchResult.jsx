import "../components/SearchResult.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Twitch from "../img/twitch.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchResult() {
	const [carData, setCardata] = useState([]);
	const [fName, setFname] = useState("");
	const [fCategory, setFcategory] = useState("");

	useEffect(() => {
		axios
			.get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
			.then((res) => {
				setCardata(res.data.cars);
			})
			.catch((err) => console.log(err.message));
	}, []);

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
			<div className="container-fluid d-flex justify-content-center align-items-center ContainerFormSewa">
				<div className="container FormSewa d-flex align-items-center justify-content-center shadow p-5 mb-5 bg-white rounded">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-xl-3 text-center mb-3">
							<p>Nama Mobil</p>
							<Form.Control className="text-center" id="FormControl" type="text" placeholder="Nama/Jenis Mobil" />
						</div>

						<div className="col-sm-12 col-md-6 col-xl-3 text-center mb-3">
							<p>Kategori</p>
							<DropdownButton id="dropdown-basic-button" title="Masukkan Kapasitas Mobil">
								<Dropdown.Item href="#/action-1">4-5 orang</Dropdown.Item>
								<Dropdown.Item href="#/action-2">5-6 orang</Dropdown.Item>
								<Dropdown.Item href="#/action-3">6-8 orang</Dropdown.Item>
							</DropdownButton>
						</div>
						<div className="col-sm-12 col-md-6 col-xl-3 text-center mb-3">
							<p>Harga</p>
							<DropdownButton id="dropdown-basic-button" title="Masukkan Harga Sewa/Hari">
								<Dropdown.Item href="#/action-1">Rp. 250k-300k</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Rp. 350k-400k</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Rp. 400k-600k</Dropdown.Item>
							</DropdownButton>
						</div>
						<div className="col-sm-12 col-md-6 col-xl-2 text-center mb-3">
							<p>Status</p>
							<DropdownButton id="dropdown-basic-button" title="Disewakan">
								<Dropdown.Item href="#/action-1">Disewakan</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							</DropdownButton>
						</div>

						<div className="col-sm-12 col-md-12 col-xl-1 text-center justify-content-center BtnCariMobil">
							<a href="#" className="btn btn-success text-center">
								Edit
							</a>
						</div>
					</div>
				</div>
			</div>
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
											<p className="DescMobil">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
										</div>
										<div className="col">
											<Link to={`/detail-paket/${item.id}`}>
												<a href="/detail-paket" className="btn btn-success text-center BtnPilihMobil">
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
