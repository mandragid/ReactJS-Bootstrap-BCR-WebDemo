import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "./Dashboard.css";
import HomeLogo from "../img/Home_Logo.png";
import CarsLogo from "../img/Cars_Logo.png";
import Rectangle from "../img/Rectangle.png";
import AdminNavbar from "../Components/AdminNavbar";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import BarChart from "../Components/BarChart";
import { useEffect, useState } from "react";
import { orderListTotal } from "../../const/OrderData";
import axios from "axios";
import { API } from "../../const/endpoint";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import rootReducer from "../../Redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
	const [orderList, setOrderList] = useState();
	console.log("Orders", orderList);

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

	useEffect(() => {
		const token = localStorage.getItem("token");
		const config = {
			headers: {
				access_token: token,
			},
		};
		axios
			.get(API.GET_ORDERLIST, config)
			.then((res) => {
				setOrderList(res.data.orders);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
													<th>No</th>
													<th>User Email</th>
													<th>Car</th>
													<th>Start Rent</th>
													<th>Finish Rent</th>
													<th>Price</th>
													<th>Category</th>
												</tr>
											</thead>

											{Object.entries(orderList).length
												? orderList.map((items) => (
														<tbody>
															<tr>
																<td>1</td>
																<td>{items.User.email}</td>
																<td>Not Set</td>
																<td>{items.start_rent_at}</td>
																<td>{items.finish_rent_at}</td>
																<td>{items.total_price}</td>
																<td>Not Set</td>
															</tr>
														</tbody>
												  ))
												: null}
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
