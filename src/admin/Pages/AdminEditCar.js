import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../Components/AdminNavbar";
import { Form } from "react-bootstrap";
import HomeLogo from "../img/Home_Logo.png";
import CarsLogo from "../img/Cars_Logo.png";
import { Breadcrumb } from "react-bootstrap";

const AdminEditCar = () => {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState(null);
	const [price, setPrice] = useState(0);
	const [created, setCreated] = useState("");
	const [updated, setUpdated] = useState("");
	const [carData, setCarData] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState();
	const [isEdited, setIsEdited] = useState(false);

	console.log("nama kendaraan", name);
	console.log("harga", price);
	console.log("kategory kend", category);

	const options = {
		headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
	};

	const handleName = (e) => {
		setName(e.target.value);
		console.log(name);
	};

	const handlePrice = (e) => {
		setPrice(e.target.value);
		console.log(price);
	};

	const handleCategory = (e) => {
		setCategory(e.target.value);
		console.log(category);
	};

	const handleImage = (e) => {
		setImage(e.target.files[0]);
		console.log("isi file", e.target.files[0]);
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
			const res = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config);
			setCarData(res.data);
			// localStorage.setItem("carName", res.data.name);
			// localStorage.setItem("price", res.data.price);
			// localStorage.setItem("category", res.data.category);

			setName(res.data.name);
			setPrice(res.data.price);
			setCategory(res.data.category);
			setCreated(res.data.createdAt);
			setUpdated(res.data.updatedAt);
			console.log("DATA MOBIL", res);
		} catch (error) {
			setErrorMessage(error.response.message);
		}
	};

	const handleEdit = async () => {
		if (!name.length) {
			setErrorMessage("Please input car name first.");
		} else if (!category.length) {
			setErrorMessage("Please input category first.");
		} else if (!price.toString().length) {
			setErrorMessage("Please input price first.");
		} else {
			const token = localStorage.getItem("token");
			const config = {
				headers: {
					access_token: token,
				},
			};
			const formData = new FormData();

			formData.append("name", name);
			formData.append("category", category);
			formData.append("price", price);
			formData.append("status", false);
			formData.append("image", image);

			try {
				await axios.put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formData, config).then((res) => {});
				setIsEdited(true);
				setTimeout(() => {
					navigate("/admin/cars");
				}, 5000);
			} catch (error) {
				console.log(error.response);
			}
		}
	};

	return (
		<div>
			<div className="container-fluid addCarPage ">
				<div className="row admin-dashboards">
					<div className="col-1 sidebar">
						{isEdited && (
							<div className="container editMessage">
								<h1>Data Berhasil Disimpan</h1>
							</div>
						)}
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
							<div className="col-1 nav-dash">
								<Link to="/admin/cars">
									<p id="dashboardTitle"> &nbsp; Cars</p>
								</Link>
								<br />
								<div className="dashboardSubtitle d-flex align-items-center">&nbsp; Edit Car</div>
							</div>
							<div className="col">
								<div className="row breadCrumb p-3">
									<Breadcrumb>
										<Breadcrumb.Item href="#">
											<span id="addCarBreadCrumbText">Cars</span>
										</Breadcrumb.Item>
										<Breadcrumb.Item href="/admin/cars">
											<span id="addCarBreadCrumbText">List Cars</span>
										</Breadcrumb.Item>
										<Breadcrumb.Item active href="/admin/addcar">
											<span className="bread-title">
												<span>Edit Car</span>
											</span>
										</Breadcrumb.Item>
									</Breadcrumb>
									<div className="container">
										<div className="row">
											<p id="addNewCarP">Edit Car</p>
										</div>
										{Object.entries(carData).length ? (
											<div className="addCarInput d-flex ">
												<div className="row">
													<div className="col-3">
														<p>Nama/Tipe Mobil</p>
													</div>
													<div className="col">
														<input onChange={handleName} placeholder="Input Nama/Tipe Mobil" defaultValue={name} />
													</div>
												</div>

												<div className="row">
													<div className="col-3">
														<p>Harga</p>
													</div>
													<div className="col">
														<input onChange={handlePrice} defaultValue={price} placeholder="Input Harga Sewa Mobil" />
													</div>
												</div>

												<div className="row">
													<div className="col-3">
														<p>Foto*</p>
													</div>
													<div className="col">
														<input onChange={handleImage} class="form-control" type="file" />
														<p>File size max. 2MB</p>
													</div>
												</div>

												<div className="row">
													<div className="col-3">
														<p>Kategori</p>
													</div>
													<div className="optionSelect">
														<Form.Select onChange={handleCategory} defaultValue={category}>
															<option value="">Pilih Kategori Mobil</option>
															<option value="small">Small</option>
															<option value="medium">Medium</option>
															<option value="large">Large</option>
														</Form.Select>
													</div>
													<div className="row mt-2">
														<div className="col">
															<p>Created at: &nbsp;{created.substring(0, 10)} </p>
														</div>
													</div>
													<div className="row">
														<div className="col">
															<p>Updated at: &nbsp; {updated.substring(0, 10)} </p>
														</div>
													</div>
												</div>
											</div>
										) : (
											"Data Tidak Ditemukan"
										)}
									</div>
									<div className="addCarButton">
										<div className="errorMessage">{!!errorMessage && <p>{errorMessage}</p>}</div>
										<div className="tomboltest">
											<div className="">
												<div className="leftButton">
													<button id="cancelAdd">
														<Link to="/admin/cars">Cancel</Link>
													</button>
												</div>
											</div>
											<div className="col-1 buttonAdminEditCar">
												<div className="buttonAdminEditCar">
													{image != null ? (
														<button id="saveAdd" onClick={handleEdit}>
															Save
														</button>
													) : (
														<button disabled id="saveAddDisabled" onClick={handleEdit}>
															Save
														</button>
													)}
												</div>
											</div>
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
};

export default AdminEditCar;
