import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthCheck } from "../Redux/authAction";

const ProtectedRouteAdmin = () => {
  const { authReducer } = useSelector((rootReducer) => rootReducer);
  const dispatch = useDispatch();
  //part 1

  useEffect(() => {
    dispatch(AuthCheck());
  }, [authReducer.isLogin]);

  //part 2
  if (authReducer.loading) {
    return "loading...";
  }

  //part3
  console.log("hasil", authReducer.isLogin);
  return authReducer.isLogin ? <Outlet /> : <Navigate to={"/admin/Login"} />;
};

export default ProtectedRouteAdmin;
