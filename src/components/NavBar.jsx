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
								<Button href="/Register" variant="success" className="regButton">
									Register
								</Button>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
			{/* End of Navigation Bar */}
		</div>
	);
}

export default NavBar;