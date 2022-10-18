import "../components/Testimony.css";
import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import User from "../img/user.png";

function Testimony() {
	const item = {
		items: [
			<div id="Testimonial" className="container TestiBox">
				<div className="row align-items-center">
					<div className="col-4">
						<img className="w-100" src={User} alt="usertesti" />
					</div>
					<div className="col">
						<p className="IsiTesti">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto earum voluptates.</p>
						<p className="NamaTesti">John Dee, 32 Jogja</p>
					</div>
				</div>
			</div>,
			<div className="container TestiBox">
				<div className="row align-items-center">
					<div className="col-4">
						<img className="w-100" src={User} alt="usertesti" />
					</div>
					<div className="col">
						<p className="IsiTesti">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto earum voluptates.</p>
						<p className="NamaTesti">Sumarjo, 22 Solo</p>
					</div>
				</div>
			</div>,
			<div className="container TestiBox">
				<div className="row align-items-center">
					<div className="col-4">
						<img className="w-100" src={User} alt="usertesti" />
					</div>
					<div className="col">
						<p className="IsiTesti">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto earum voluptates.</p>
						<p className="NamaTesti">Nandha, 23 Tegal</p>
					</div>
				</div>
			</div>,
			<div className="container TestiBox">
				<div className="row align-items-center">
					<div className="col-4">
						<img className="w-100" src={User} alt="usertesti" />
					</div>
					<div className="col">
						<p className="IsiTesti">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto earum voluptates.</p>
						<p className="NamaTesti">Feby Kusnadi, 22 Slawi</p>
					</div>
				</div>
			</div>,
			<div className="container TestiBox">
				<div className="row align-items-center">
					<div className="col-4">
						<img className="w-100" src={User} alt="usertesti" />
					</div>
					<div className="col">
						<p className="IsiTesti">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto earum voluptates.</p>
						<p className="NamaTesti">Klenik Kopi, 21 Cergomas</p>
					</div>
				</div>
			</div>,
			<div className="container TestiBox">
				<div className="row align-items-center">
					<div className="col-4">
						<img className="w-100" src={User} alt="usertesti" />
					</div>
					<div className="col">
						<p className="IsiTesti">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto earum voluptates.</p>
						<p className="NamaTesti">Harhor, 27 Talang</p>
					</div>
				</div>
			</div>,
		],
	};

	const options = {
		items: 3,
		nav: true,
		rewind: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			450: {
				items: 2,
			},
			600: {
				items: 3,
			},
		},
	};

	return (
		<div className="TestimonyContainer container-fluid">
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Testimonial</h2>
						<p>Berbagai review positif dari para pelanggan kami</p>
					</div>
					<div className="app">
						<OwlCarousel options={options}>{item.items}</OwlCarousel>
					</div>
				</div>
			</div>

			{/* div testi */}
		</div>
	);
}

export default Testimony;
