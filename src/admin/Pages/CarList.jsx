import AdminNavbar from "../Components/AdminNavbar";
import { Link } from "react-router-dom";
import HomeLogo from "../img/Home_Logo.png";
import CarsLogo from "../img/Cars_Logo.png";
import "./Dashboard.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DialogBoxCar from "../img/DialogBoxCar.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../Redux/carAction";
import { handleFilter } from "../../Redux/carAction";
import { Breadcrumb } from "react-bootstrap";
import CatIcon from "../img/fi_users.png";
import ClockIcon from "../img/fi_clock.png";

function CarList() {
	const [carData, setCardata] = useState([]);
	const [isDeleted, setIsDeleted] = useState(false);
	const [dialogState, setDialogState] = useState({
		open: false,
		selectedId: null,
	});
	const dispatch = useDispatch();
	const fName = "";
	const { cars } = useSelector((rootReducer) => rootReducer);

	const [isAllActive, setIsAllActive] = useState(false);
	const [isSmallActive, setIsSmallActive] = useState(false);
	const [isMediumActive, setIsMediumActive] = useState(false);
	const [isLargeActive, setIsLargeActive] = useState(false);

	const handleOpen = (id) => {
		setDialogState({
			open: true,
			selectedId: id,
		});
	};

	const handleClose = (id) => {
		setDialogState({
			open: false,
			selectedId: null,
		});
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setIsDeleted(false);
		}, 6000);
	}, [isDeleted]);

	const handleAll = () => {
		setIsAllActive(true);
		setIsMediumActive(false);
		setIsSmallActive(false);
		setIsLargeActive(false);
	};
	const handleMedium = () => {
		setIsAllActive(false);
		setIsMediumActive(true);
		setIsSmallActive(false);
		setIsLargeActive(false);
	};
	const handleSmall = () => {
		setIsAllActive(false);
		setIsMediumActive(false);
		setIsSmallActive(true);
		setIsLargeActive(false);
	};
	const handleLarge = () => {
		setIsAllActive(false);
		setIsMediumActive(false);
		setIsSmallActive(false);
		setIsLargeActive(true);
	};

	const getData = async () => {
		const token = localStorage.getItem("token");
		const config = {
			headers: {
				access_token: token,
			},
		};

		dispatch(getAllCars(config));
	};

	const handleChangeCategory = (category) => {
		const fCategory = category;
		dispatch(handleFilter(fName, fCategory));
		console.log("kategori mobil", fCategory);
	};

	const handleDelete = async (id) => {
		const token = localStorage.getItem("token");
		const config = {
			headers: {
				access_token: token,
			},
		};
		try {
			await axios.delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${dialogState.selectedId}`, config);
			await setDialogState({
				open: false,
				selectedId: null,
			});
			await setIsDeleted(true);
			await getData();
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<div className="container-fluid ">
			<div className="row admin-dashboards">
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
					<div className="row">
						<div className="col-1 nav-dash">
							<span>
								<p id="dashboardTitle"> &nbsp; Cars</p>
							</span>{" "}
							<br />
							<div className="dashboardSubtitle d-flex align-items-center">&nbsp; List Car</div>
						</div>

						<div className="col admin-dashboard">
							<div className="row p-3">
								<Breadcrumb>
									<Breadcrumb.Item href="#">Cars</Breadcrumb.Item>
									<Breadcrumb.Item active href="#">
										<span className="bread-title">List Car</span>
									</Breadcrumb.Item>
								</Breadcrumb>
							</div>
							{dialogState.open && (
								<div className="container-fluid dialogBox">
									<div className="row">
										<div className="col">
											<img src={DialogBoxCar} alt="" />
										</div>
									</div>
									<div className="row">
										<p id="dataMobil">Menghapus Data Mobil</p>
									</div>
									<div className="row">
										<p id="yakinHapus">Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
									</div>
									<div className="row">
										<div className="col">
											<button className="yesButton" onClick={() => handleDelete(dialogState.selectedId)}>
												Ya
											</button>
										</div>
										<div className="col">
											<button className="noButton" onClick={handleClose}>
												Tidak
											</button>
										</div>
									</div>
								</div>
							)}
							{isDeleted && (
								<div className="container deleteMessage">
									<h1>Data Berhasil Dihapus</h1>
								</div>
							)}

							<div className="container carListCard">
								<div className=" container topSectionContainer">
									<div className="row justify-content-center">
										<div className="col-6">
											<h2>List Car</h2>
										</div>
										<div className="col-6 buttonAddCar text-end">
											<Link to={"/admin/addcar"}>
												<button>+ Add New Car</button>
											</Link>
										</div>
									</div>
									<div className="row ">
										<div className="col-lg-1 col-sm-2 filterCategoryButton">
											<button
												className={isAllActive ? "row categoryButtonA " : "row categoryButton "}
												onClick={() => {
													handleAll();
													handleChangeCategory("");
												}}
											>
												All
											</button>
										</div>
										<div className="col-lg-1 col-sm-2">
											{" "}
											<button
												className={isSmallActive ? "row categoryButtonA " : "row categoryButton "}
												onClick={() => {
													handleSmall();
													handleChangeCategory("small");
												}}
											>
												2-4 people
											</button>{" "}
										</div>
										<div className="col-lg-1 col-sm-2">
											<button
												className={isMediumActive ? "row categoryButtonA " : "row categoryButton "}
												onClick={() => {
													handleMedium();
													handleChangeCategory("medium");
												}}
											>
												4-6 people
											</button>
										</div>
										<div className="col-lg-1 col-sm-2">
											<button
												className={isLargeActive ? "row categoryButtonA " : "row categoryButton "}
												onClick={() => {
													handleLarge();
													handleChangeCategory("large");
												}}
											>
												6-8 people
											</button>
										</div>
									</div>
								</div>
								<div className="cardContainer row justify-content-center">
									{!!cars.carData.length
										? cars.carData.map((item) => (
												<div className="col-sm-12 col-md-6  ResultCard ResultCardAdmin">
													<div className="col CarImage">
														<img src={item.image} />
													</div>
													<div className="col">
														<p id="carTypeTitle">{item.name}</p>
														<p className="HargaMobil">{item.price}</p>
														<p className="DescMobil">
															<div className="carCategory d-flex">
																<div className="iconCat">
																	<img src={CatIcon} alt="caticon	" />
																</div>
																<div className="descCat">&nbsp;{item.category}</div>
															</div>
														</p>
														<p className="updatedAt d-flex">
															<div className="iconUpdate">
																<img src={ClockIcon} alt="clockicon" />
															</div>
															<div className="descUpdate">
																<p>&nbsp; Updated at: &nbsp; {item.updatedAt.substring(0, 10)} </p>
															</div>
														</p>
													</div>
													<div className="row">
														<div className="col-6 buttonDeleteCar">
															<button onClick={() => handleOpen(item.id)}>Delete Car</button>
														</div>

														<div className="col-6 buttonEditCar">
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
			</div>
		</div>
	);
}

export default CarList;
