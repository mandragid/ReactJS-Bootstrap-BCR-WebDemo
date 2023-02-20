import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./LoginCustomer.css"
import SplashLoginCustomer from "../img/SplashLoginCustomer.png"
import axios from "axios";
import { API } from "../const/endpoint";
import { authReducer } from "../Redux/AuthReducer";
import rootReducer from "../Redux";

const LoginCustomer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [wrong, setWrong] = useState ("")
    const {authReducer} = useSelector((rootReducer) => rootReducer)
    
    const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async() => {
    const payLoad = {
      email: email,
      password: password,
    };
    axios
      .post(API.LOGIN_CUSTOMER, payLoad)
      .then((res) => {
          console.log(res)
          localStorage.setItem("token", res.data.access_token);
          {authReducer.isLogin = true}
          setTimeout(() => {
            navigate("/");
          }, 2000);
      })
      .catch((err) => setWrong(true))
  };


   return (
      <div className="login-base">
        <div className="login-form-section">
          
          <div className="login-greetings">
            <div className="login-rectangle">
          </div>
          <h1>Welcome Back!</h1>
          </div>
          <div className="login-form-section-input">
          {
          !!wrong ? (
            <div className="wrong-login">
            <label>
            Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
            </label>  
            </div>
          ) : (null)} 
          
            <div className="login-input-block">
            <label>Email</label>
            <input
              onChange={handleEmail}
              placeholder="input email"
              type="email"
              className="login-input"
            />
            </div>
            <div className="input-block">
            <label>Password</label>
            <input
              typeof="password"
              onChange={handlePassword}
              placeholder="input password"
              type="password"
              className="login-input"
            />
            <button onClick={handleLogin} className="login-button">
              Sign-In
            </button>
            </div>
          </div>
          <div className="login-link-text">
            <h3>Don't have an account ? <a href="/register">Sign Up for Free</a></h3>
          </div>
        </div>
        <div className="splash-login-customer">
          <div className="splash-content">
          <div className="splash-image">
      <img src={SplashLoginCustomer}/>
      </div>
      </div>
      </div>
    </div>
  );
};

export default LoginCustomer