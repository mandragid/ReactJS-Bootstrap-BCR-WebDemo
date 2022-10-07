import "../components/Footer.css";
import React from "react";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Twitch from "../img/twitch.png";
function Footer() {
	return (
		<div className="container-fluid Footer">
			<div className="container">
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
	);
}

export default Footer;
