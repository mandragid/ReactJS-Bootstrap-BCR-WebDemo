import "../components/orderDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment/moment";
import 'moment/locale/id'


const OrderDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const startDate = moment(localStorage.getItem("startDate"))
  const endDate = moment(localStorage.getItem("endDate"))
  


  // const handleDate = () => {

  // }

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="orderDetail-container">
      <div className="orderDetailContent-outer-container">
        <div className="orderDetailContent-inner-container col-with-heading">
          <div className="heading-container">
            <h1>Detail Pesananmu</h1>
          </div>
          <div className="sub-heading-container sub-heading-1">
            <h3>Nama / Tipe Mobil</h3>
          </div>
          <div className="sub-heading-container sub-heading-2">
          <h3>{car.name ? car.name.charAt(0).toUpperCase() + car.name.slice(1) : null}</h3>
          </div>
        </div>
        <div className="orderDetailContent-inner-container col-without-heading">
          <div className="sub-heading-container sub-heading-1">
            <h3>Kategori</h3>
          </div>
          <div className="sub-heading-container sub-heading-2">
          <h3>{car.category ? car.category.charAt(0).toUpperCase() + car.category.slice(1) : "-"}</h3>
          </div>
        </div>
        <div className="orderDetailContent-inner-container col-without-heading">
          <div className="sub-heading-container sub-heading-1">
            <h3>Tanggal Mulai Sewa</h3>
          </div>
          <div className="sub-heading-container sub-heading-2">
            <h3>{startDate.lang("id").format("LL")}</h3>
          </div>
        </div>
        <div className="orderDetailContent-inner-container col-without-heading">
          <div className="sub-heading-container sub-heading-1">
            <h3>Tanggal Akhir Sewa</h3>
          </div>
          <div className="sub-heading-container sub-heading-2">
            <h3>{endDate.lang("id").format("LL")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
