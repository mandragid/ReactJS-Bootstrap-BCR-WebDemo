import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../Components/AdminNavbar";

const AdminEditCar = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [carData, setCarData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
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
      const res = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
        config
      );
      setCarData(res.data);
      localStorage.setItem("carName", res.data.name);
      localStorage.setItem("price", res.data.price);
      localStorage.setItem("fileName", res.data.image);
      localStorage.setItem("category", res.data.category);
      setName(res.data.name);
      setPrice(res.data.price);
      setCategory(res.data.category);
      setImage(res.data.image);
      console.log("image after", image);
    } catch (error) {
      setErrorMessage(error.response.message);
    }
  };

  const handleEdit = async () => {
    if (!name.length) {
      setErrorMessage("Please input car name first.");
    } else if (!category.length) {
      setErrorMessage("Please input category first.");
    } else if (!price.toString.length) {
      setErrorMessage("Please input price first.");
    } else {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          access_token: token,
        },
      };
      const formData = new FormData();
      // console.log(typeof image);
      // if (typeof image == "object")

      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("status", false);
      formData.append("image", image);

      try {
        await axios.put(
          `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
          formData,
          config
        );
        navigate("/admin/cars");
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <div>
      <AdminNavbar />

      {Object.entries(carData).length ? (
        <div>
          <input
            onChange={handleName}
            defaultValue={localStorage.getItem("carName")}
          />
          <input
            onChange={handleCategory}
            defaultValue={localStorage.getItem("category")}
          />
          <input onChange={handlePrice} defaultValue={price} />
          <img src={image} id="imageId" height="200px" width="100px"></img>
          <input onChange={handleImage} type={"file"} />
          <button>
            <Link to="/admin/cars">Cancel</Link>
          </button>
          <button onClick={handleEdit}>Save</button>
          {!!errorMessage && <p>{errorMessage}</p>}
        </div>
      ) : (
        "Data Tidak Ditemukan"
      )}
    </div>
  );
};

export default AdminEditCar;
