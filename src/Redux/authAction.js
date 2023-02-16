import axios from "axios";
import { API } from "../const/endpoint";

export let formstatus = "";

export const AuthCheck = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch({
      type: "CHECK_TOKEN_ADMIN",
      payload: {
        isLogin: false,
        loading: false,
      },
    });
  } else {
    dispatch({
      type: "CHECK_TOKEN_ADMIN",
      payload: {
        isLogin: true,
        loading: false,
      },
    });
  }
};

export const AuthCheckCustomer = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch({
      type: "CHECK_TOKEN_CUSTOMER",
      payload: {
        isLogin: false,
        loading: false,
      },
    });
  } else {
    dispatch({
      type: "CHECK_TOKEN_CUSTOMER",
      payload: {
        isLogin: true,
        loading: false,
      },
    });
  }
};

export const userAction = (payLoad) => (dispatch) => {
  axios
    .post(API.LOGIN, payLoad)
    .then((ress) => {
      console.log(ress);
      localStorage.setItem("token", ress.data.access_token);
      localStorage.setItem("user", ress.data.email);
      dispatch({
        type: "USER",
        payload: {
          user: ress.data.email,
          isLogin: true,
        },
      });
      console.log("result", ress);
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response.data.message,
      });
    });
};
