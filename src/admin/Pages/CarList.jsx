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
  console.log("carData", carData);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      access_token: token,
    },
  };
  useEffect(() => {
    axios
      .get(API.GET_ADMIN_CARS, config)
      .then((res) => {
        setCardata(res.data.cars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                    <div className="col">
                      <Link to={`/detail-paket/`}>
                        <a
                          href="/detail-paket"
                          className="btn btn-success text-center BtnPilihMobil"
                        >
                          <h1 className="CaptPilihMobil">Pilih Mobil</h1>
                        </a>{" "}
                      </Link>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarList;
