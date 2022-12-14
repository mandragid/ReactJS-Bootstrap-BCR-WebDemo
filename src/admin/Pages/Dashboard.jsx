import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "./Dashboard.css";
import HomeLogo from "../img/Home.png";
import Rectangle from "../img/Rectangle.png";
import AdminNavbar from "../Components/AdminNavbar";

function Dashboard() {
	return (
		<div>
			<div className="container-fluid admin-dashboard">
				<div className="row">
					<div className="col-1 sidebar">
						<div className="row">
							<img src={HomeLogo} alt="x" className="" />
						</div>
					</div>
					<div className="col admin-nav">
						<AdminNavbar />
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
												<span className="header-title">Rented Car Data Visualization</span>
											</li>
										</ul>
									</div>
									<div className="row">
										<p>Month</p>
									</div>
									<div className="row">
										<div className="col-2">
											<Form.Select aria-label="Default select example">
												<option>June 2022</option>
												<option value="1">July 2022</option>
												<option value="2">Aug 2022</option>
												<option value="3">Sept 2022</option>
											</Form.Select>
										</div>
										<div className="col">
											{" "}
											<Button className="adminpage-btn" variant="primary">
												Go
											</Button>{" "}
										</div>
									</div>
									<div className="row chart-container">CHART DATA</div>
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
										{" "}
										<Table striped bordered hover>
											<thead>
												<tr>
													<th>No</th>
													<th>User Email</th>
													<th>Car</th>
													<th>Start Rent</th>
													<th>Finish Rent</th>
													<th>Price</th>
													<th>Category</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>2</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>3</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>4</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>5</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>6</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>7</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>8</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>9</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
												<tr>
													<td>10</td>
													<td>User Email</td>
													<td>Car</td>
													<td>Start Rent</td>
													<td>Finish Rent</td>
													<td>Price</td>
													<td>Category</td>
												</tr>
											</tbody>
										</Table>
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
											<Form.Select aria-label="Default select example">
												<option>10</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</Form.Select>
										</div>
										<div className="col-1">
											{" "}
											<Form.Select aria-label="Default select example">
												<option>1</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</Form.Select>
										</div>
										<div className="col">
											<Button variant="primary adminpage-btn">Go</Button>{" "}
										</div>
										<div className="col d-flex justify-content-end">
											<Pagination>
												<Pagination.First />
												<Pagination.Item active>{1}</Pagination.Item>
												<Pagination.Item>{2}</Pagination.Item>
												<Pagination.Item>{3}</Pagination.Item>
												<Pagination.Ellipsis />
												<Pagination.Item>{9}</Pagination.Item>
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
