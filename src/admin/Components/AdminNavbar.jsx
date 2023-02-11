import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./AdminNavbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AdminNavbar() {
  const { user } = useSelector((rootReducer) => rootReducer);
  const navigate = useNavigate;

  const userID = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  //   const handleRedirect = () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       navigate("/admin/login");
  //     }
  //   };

  //   useEffect(() => {
  //     handleRedirect();
  //   });

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/admin/dashboard">BCR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
            <img
              className="ms-3 admin-user-logo"
              src="https://www.kindpng.com/picc/m/22-223910_circle-user-png-icon-transparent-png.png"
              alt="x"
            />
            <span className="ms-2">{userID}</span>{" "}
            <DropdownButton
              className="ms-3"
              id="dropdown-basic-button"
              title=""
            >
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AdminNavbar;
