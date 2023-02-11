import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../const/endpoint";

const AdminAddCar = () => {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState("");
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState();

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
		localStorage.setItem("img", e.target.files[0]);
		console.log(e.target.files[0]);
	};

	const HandleCreate = async () => {
		if (!name.length) {
			setErrorMessage("Please input car name first.");
		} else if (!category.length) {
			setErrorMessage("Please input category first.");
		} else if (!price.length) {
			setErrorMessage("Please input price first.");
		} else {
			const token = localStorage.getItem("token");
			const config = {
				headers: {
					access_token: token,
				},
			};

			const formData = new FormData();
			formData.append("image", image);
			formData.append("name", name);
			formData.append("category", category);
			formData.append("price", price);
			formData.append("status", false);
			try {
				const res = await axios.post(API.POST_ADMIN_CAR, formData, config);
				navigate("/admin/cars");
			} catch (error) {
				setErrorMessage(error.response.statusText);
				console.log(error.response);
			}
		}
	};

	return (
		<div>
			<input onChange={handleName} placeholder="Name" />
			<input onChange={handleCategory} placeholder="tipe mobil" />
			<input onChange={handlePrice} placeholder="Harga" />
			<input onChange={handleImage} type="file" />
			<button>
				<Link to="/admin/cars">Cancel</Link>
			</button>
			<button onClick={HandleCreate}>Save</button>
			{!!errorMessage && <p>{errorMessage}</p>}
		</div>
	);
};

export default AdminAddCar;
