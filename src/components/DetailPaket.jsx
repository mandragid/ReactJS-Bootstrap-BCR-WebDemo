import "../components/DetailPaket.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function DetailPaket() {
	return (
		<div className="container-fluid">
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
			{/* navbar end */}
		</div>
	);
}

export default DetailPaket;
