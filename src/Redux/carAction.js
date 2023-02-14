import axios from "axios";
import { API } from "../const/endpoint";

export const handleFilter = (fName, fCategory) => (dispatch) => {
  axios
    .get(
      `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&maxPrice=&isRented=`
    )
    .then((res) => {
      dispatch({
        type: "GET_ADMIN_CARS",
        payload: res.data.cars,
      });
      console.log(res);
    })
    .catch((err) => console.log(err.message));
};

export const getAllCars = (config) => async (dispatch) => {
  try {
    const res = await axios.get(API.GET_ADMIN_CARS, config);
    dispatch({
      type: "GET_ALL_CARS",
      payload: res.data.cars,
    });
  } catch (error) {
    console.log(error);
  }
};
