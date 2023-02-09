import axios from "axios";
import { useNavigate } from "react-router";

export const getCarsAction = (config) => (dispatch) => {
  const token = localStorage.getItem('token')
  const config = {
      headers: {access_token: token}
  }
        axios
          .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`, config)
          .then((res) => {

            dispatch({
                type: "GET_ALL_CARS",
                payload: res.data.cars,
          });
          })
          .catch((err) => console.log(err.message));
}

export const deleteCar = (id) => (dispatch) => {
  const token = localStorage.getItem('token')
  const config = {
      headers: {access_token: token}
        }
  axios
    .delete (`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,config)
    .then((res)=> {
      dispatch({
        type: "DELETE",
        payload: "berhasil",
    })
    getCarsAction(config)
  })
    .catch ((err)=>(alert("execution failed")))
}

export const singleCar = (id) => (dispatch) =>{
  const token = localStorage.getItem('token')
  const config = {
      headers: {access_token: token}
        }
  axios
    .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`, config)
    .then((res) => {
      console.log(res.data)
        dispatch({
          type: "SINGLE",
          payload: res.data
      })
    })
    .catch((err)=> console.log(err.message))

}

export const updateCar = (id, formData) => (dispatch) =>{

  const token = localStorage.getItem('token')
  const config = {
      headers: {access_token: token}
        }
    
axios
    .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formData , config)
    .then((res) => {
      dispatch({
        type: "UPDATE",
        payload: res.data
      })
    })
    .catch((err) => console.log(err))
  }

export const addCar = (formData) => (dispatch) =>{

    const token = localStorage.getItem('token')
    const config = {
        headers: {access_token: token}
          }
      
  axios
      .post(`https://bootcamp-rent-cars.herokuapp.com/admin/car/`, formData , config)
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: "ADD_CAR",
          payload: res.data
        })
      })
      .catch((err) => console.log(err))
}