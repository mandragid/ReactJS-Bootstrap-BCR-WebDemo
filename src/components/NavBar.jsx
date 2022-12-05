import "../components/NavBar.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Mercy from "../img/mercy.png";

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
		</div>
	);
}

export default NavBar;
