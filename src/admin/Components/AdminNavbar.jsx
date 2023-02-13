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
import { useState } from "react";
import axios from "axios";

function AdminNavbar() {
  const { user } = useSelector((rootReducer) => rootReducer);
  const navigate = useNavigate();
  const [carData, setCardata] = useState([]);
  const [fName, setFname] = useState("");
  const [fCategory, setFcategory] = useState("");
  const userID = localStorage.getItem("user");

  const { name } = useSelector((rootReducer) => rootReducer);

  console.log("handleName", name);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/admin/login");
    }, 2000);
  };

  const handleChangeName = (e) => {
    setFname(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setFcategory(e.target.value);
    console.log(e.target.value);
  };

  const handleFilter = (e) => {
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&maxPrice=&isRented=`
      )
      .then((res) => {
        setCardata(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  };

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
                onChange={handleChangeName}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button onClick={handleFilter} variant="outline-primary">
                Search
              </Button>
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
