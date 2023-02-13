import AdminNavbar from "../Components/AdminNavbar";
import { Link } from "react-router-dom";
import HomeLogo from "../img/Home_Logo.png";
import CarsLogo from "../img/Cars_Logo.png";
import "./Dashboard.css";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../const/endpoint";
import { useState } from "react";
import DialogBoxCar from "../img/DialogBoxCar.png";

function CarList() {
  const [carData, setCardata] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [isDeleted, setIsDeleted] = useState(false);
  const [dialogState, setDialogState] = useState({
    open: false,
    selectedId: null,
  });

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

  console.log(dialogState);

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
      await axios.delete(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${dialogState.selectedId}`,
        config
      );
      setDialogState({
        open: false,
        selectedId: null,
      });
      setIsDeleted(true);
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
          {dialogState.open && (
            <div className="container-fluid dialogBox">
              <div className="row">
                <div className="col">
                  <img src={DialogBoxCar} alt="" />
                </div>
              </div>
              <div className="row">
                <p>Menghapus Data Mobil</p>
              </div>
              <div className="row">
                <p>
                  Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                  ingin menghapus?
                </p>
              </div>
              <div className="row">
                <div className="col">
                  <button onClick={() => handleDelete(dialogState.selectedId)}>
                    Ya
                  </button>
                </div>
                <div className="col">
                  <button onClick={handleClose}>Tidak</button>
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
                        <p className="DescMobil">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-6 buttonDeleteCar">
                          <button onClick={() => handleOpen(item.id)}>
                            Delete Car
                          </button>
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
