import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Pagination from "react-bootstrap/Pagination";
import "./Dashboard.css";
import HomeLogo from "../img/Home_Logo.png";
import CarsLogo from "../img/Cars_Logo.png";
import Rectangle from "../img/Rectangle.png";
import { getOrderList, handlePagination } from "../../Redux/carAction";
import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BarChart from "../Components/BarChart";
import { useEffect, useState } from "react";
import { orderListTotal } from "../../const/OrderData";
import axios from "axios";
import { API } from "../../const/endpoint";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../../Redux";
import { carReducers } from "../../Redux/carReducers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [page, setPage] = useState();
  const [limit, setLimit] = useState();
  const [fName, setFname] = useState("");
  const dispatch = useDispatch();
  const userID = localStorage.getItem("user");
  const navigate = useNavigate();

  const { cars } = useSelector((rootReducer) => rootReducer);

  console.log("list orderan", cars);

  const handleChangeName = (e) => {
    setFname(e.target.value);
    // console.log(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/admin/login");
    }, 2000);
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        labelColor: [],
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: orderListTotal.map((data) => data.date),
      datasets: [
        {
          label: "Amount of Car Rented",
          labelColor: ["blue"],
          data: orderListTotal.map((data) => data.totalOrder),
          backgroundColor: "#586B90",
        },
      ],
    });
  }, []);

  const OrderList = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    dispatch(getOrderList(config));
  };

  useEffect(() => {
    OrderList();
  }, []);

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };

  const handlePage = async (page, limit) => {
    await setPage(page);
    await setLimit(limit);
    console.log(page, limit);
    dispatch(handlePagination(page, limit));
  };

  return (
    <div>
      <div className="container-fluid admin-dashboard">
        <div className="row">
          <div className="col-1 sidebar">
            <div className="row">
              <Link to={"/admin/dashboard"}>
                <div className="home">
                  <img src={HomeLogo} alt="x" className="" />
                  <p>Home</p>
                </div>
              </Link>
              <Link to={"/admin/cars"}>
                <div className="cars">
                  <img src={CarsLogo} alt="x" className="" />
                  <p>Cars</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col admin-nav">
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
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </DropdownButton>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div className="row">
              <div className="col-1 nav-dash">Dashboard</div>
              <div className="col">
                <div className="row p-3">
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">
                      <span className="bread-title">Dashboard</span>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="container">
                  <div className="row header-title-container">
                    <ul>
                      <li>
                        <img src={Rectangle} alt="" className="me-1" />
                        <span className="header-title">
                          Rented Car Data Visualization
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <p>Month</p>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <Form.Select aria-label="Default select example">
                        <option value="1">January - 2023</option>
                        <option value="2">February - 2023</option>
                        <option value="3">March - 2023</option>
                        <option value="4">April - 2023</option>
                        <option value="5">May - 2023</option>
                        <option value="6">June - 2023</option>
                        <option value="7">July - 2023</option>
                        <option value="8">August - 2023</option>
                        <option value="9">September - 2023</option>
                        <option value="10">October - 2023</option>
                        <option value="11">November - 2023</option>
                        <option value="12">December - 2023</option>
                      </Form.Select>
                    </div>
                    <div className="col">
                      {" "}
                      <Button className="adminpage-btn" variant="primary">
                        Go
                      </Button>{" "}
                    </div>
                  </div>
                  <div className="row chartjs-container">
                    <BarChart chartData={chartData} />
                  </div>
                </div>
                <div className="container">
                  <div className="row mt-5">
                    <p id="table-title">Dashboard</p>
                    <ul>
                      <li>
                        <img src={Rectangle} alt="" className="me-1" />
                        <span className="header-title">List Order</span>
                      </li>
                    </ul>
                  </div>
                  <div className="row table-container">
                    <table striped bordered hover>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>User Email</th>
                          <th>Car</th>
                          <th>Start Rent</th>
                          <th>Finish Rent</th>
                          <th>Price</th>
                          <th>Category</th>
                        </tr>
                      </thead>

                      {Object.entries(cars.orderList).length
                        ? cars.orderList.map((items) => (
                            <tbody>
                              <tr>
                                <td>
                                  <p>{items.id}</p>
                                </td>
                                <td>
                                  <p>{items.User.email}</p>
                                </td>
                                <td>Not Set</td>
                                <td>
                                  <p>{items.start_rent_at.substr(0, 10)}</p>
                                </td>
                                <td>
                                  <p>{items.finish_rent_at.substr(0, 10)}</p>
                                </td>
                                <td>
                                  <p>{items.total_price}</p>
                                </td>
                                <td>Not Set</td>
                              </tr>
                            </tbody>
                          ))
                        : "not found"}
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <p>Limit</p>
                    </div>
                    <div className="col-1">
                      <p>Jump to Page</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      {" "}
                      <Form.Select
                        onChange={handleChangeLimit}
                        aria-label="Default select example"
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </Form.Select>
                    </div>
                    <div className="col-1">
                      {" "}
                      <Form.Select aria-label="Default select example">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </Form.Select>
                    </div>
                    <div className="col">
                      <Button
                        onClick={() => handlePage()}
                        variant="primary adminpage-btn"
                      >
                        Go
                      </Button>{" "}
                    </div>
                    <div className="col d-flex justify-content-end">
                      <Pagination>
                        <Pagination.First onClick={() => handlePage(1, 10)} />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item onClick={() => handlePage(2, 10)}>
                          {2}
                        </Pagination.Item>
                        <Pagination.Item onClick={() => handlePage(3, 10)}>
                          {3}
                        </Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item onClick={() => handlePage(9, 10)}>
                          {9}
                        </Pagination.Item>
                        <Pagination.Last />
                      </Pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
