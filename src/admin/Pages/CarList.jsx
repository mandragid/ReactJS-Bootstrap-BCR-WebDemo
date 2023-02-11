import AdminNavbar from "../Components/AdminNavbar";
import { Link } from "react-router-dom";
import HomeLogo from "../img/Home_Logo.png";
import CarsLogo from "../img/Cars_Logo.png";
import "./Dashboard.css";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../const/endpoint";
import { useState } from "react";

function CarList() {
	const [carData, setCardata] = useState([]);
	const [errorMessage, setErrorMessage] = useState();

	console.log("carData", carData);
	const token = localStorage.getItem("token");
	const config = {
		headers: {
			access_token: token,
		},
	};

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const token = localStorage.getItem("token");
		const config = {
			headers: {
				access_token: token,
			},
		};

		try {
			const res = await axios.get(API.GET_ADMIN_CARS, config);
			setCardata(res.data.cars);
			console.log(res.data);
		} catch (error) {
			console.log(error);
			setErrorMessage("tidak ada data mobil yang dapat ditampilkan");
		}
	};

	const handleDelete = async (id) => {
		const token = localStorage.getItem("token");
		const config = {
			headers: {
				access_token: token,
			},
		};

		try {
			const res = await axios.delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config);
			getData();
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
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
				<div className="col admin-nav ">
					<AdminNavbar />
					<div className="container carListCard">
						<div className="addCar">
							<div className="row">
								<div className="col-6">
									<h2>List Car</h2>
								</div>
								<div className="col-6 buttonAddCar">
									<Link to={"/admin/addcar"}>
										<button>+ Add New Car</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="row">
							{!!carData.length
								? carData.map((item) => (
										<div className="col-sm-12 col-md-6  ResultCard">
											<div className="col CarImage">
												<img src={item.image} />
											</div>
											<div className="col">
												<p className="NamaMobil">{item.name}</p>
												<p className="HargaMobil">Harga</p>
												<p className="DescMobil">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
											</div>
											<div className="row">
												<div className="col-6 buttonDeleteCar">
													<button onClick={() => handleDelete(item.id)}>Delete Car</button>
												</div>

												<div className="col-6 buttonAddCar">
													<Link to={`/admin/edit-car/${item.id}`}>
														<button>Edit Car</button>
													</Link>
												</div>
											</div>
										</div>
								  ))
								: null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CarList;
