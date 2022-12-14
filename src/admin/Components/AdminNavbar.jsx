import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "./AdminNavbar.css";

function AdminNavbar() {
	return (
		<div>
			<div className="container-fluid admin-dashboard">
				<div className="row">
					<div className="col-1 sidebar">Home</div>
					<div className="col admin-nav">
						<Navbar bg="light" expand="lg">
							<Container fluid>
								<Navbar.Brand href="#">BCR</Navbar.Brand>
								<Navbar.Toggle aria-controls="navbarScroll" />
								<Navbar.Collapse id="navbarScroll">
									<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
									<Form className="d-flex">
										<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
										<Button variant="outline-success">Search</Button>
									</Form>
									<img className="admin-user-logo" src="https://www.kindpng.com/picc/m/22-223910_circle-user-png-icon-transparent-png.png" alt="x" />
									<p>Admin Name</p>
								</Navbar.Collapse>
							</Container>
						</Navbar>
						<div className="row">
							<div className="col-1 nav-dash">Dashboard</div>
							<div className="col">
								<div className="row">
									<Breadcrumb>
										<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
										<Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Library</Breadcrumb.Item>
										<Breadcrumb.Item active>Data</Breadcrumb.Item>
									</Breadcrumb>
								</div>
								<div className="row">Rented Car Data Visualization</div>
								<div className="row">
									<p>Month</p>
								</div>
								<div className="row">
									<div className="col-2">
										<Form.Select aria-label="Default select example">
											<option>Pilih Bulan</option>
											<option value="1">June 2022</option>
											<option value="2">July 2022</option>
											<option value="3">August 2022</option>
										</Form.Select>
									</div>
									<div className="col">
										{" "}
										<Button variant="primary">Go</Button>{" "}
									</div>
								</div>
								<div className="row chart-container">CONTENT DATA</div>
								<div className="row">
									<p>Dashboard</p>
									<p>List Order</p>
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
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
												<td>@mdo</td>
												<td>@mdo</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
												<td>@fat</td>
												<td>@fat</td>
												<td>@fat</td>
											</tr>
											<tr>
												<td>3</td>
												<td>@twitter</td>
												<td>@twitter</td>
												<td>@twitter</td>
												<td>@twitter</td>
												<td>@twitter</td>
												<td>@twitter</td>
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
										<Button variant="primary">Go</Button>{" "}
									</div>
									<div className="col">
										<Pagination>
											<Pagination.First />
											<Pagination.Prev />
											<Pagination.Item>{1}</Pagination.Item>
											<Pagination.Ellipsis />

											<Pagination.Item>{10}</Pagination.Item>
											<Pagination.Item>{11}</Pagination.Item>
											<Pagination.Item active>{12}</Pagination.Item>
											<Pagination.Item>{13}</Pagination.Item>
											<Pagination.Item disabled>{14}</Pagination.Item>

											<Pagination.Ellipsis />
											<Pagination.Item>{20}</Pagination.Item>
											<Pagination.Next />
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
	);
}

export default AdminNavbar;
