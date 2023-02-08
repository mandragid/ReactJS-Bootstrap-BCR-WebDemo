import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./AdminNavbar.css";
import HomeLogo from "../img/Home.png";

function AdminNavbar() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/admin/dashboard">BCR</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="m-auto" style={{ maxHeight: "100px" }} navbarScroll></Nav>
						<Form className="d-flex">
							<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
							<Button variant="outline-primary">Search</Button>
						</Form>
						<img className="ms-3 admin-user-logo" src="https://www.kindpng.com/picc/m/22-223910_circle-user-png-icon-transparent-png.png" alt="x" />
						<span className="ms-2">Admin Name</span>{" "}
						<DropdownButton className="ms-3" id="dropdown-basic-button" title="">
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</DropdownButton>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default AdminNavbar;
