import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./RegisterCustomer.css"
import SplashLoginCustomer from "../img/SplashLoginCustomer.png"
import axios from "axios";
import { API } from "../const/endpoint";

const RegisterCustomer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userReducer} = useSelector((rootReducer) => rootReducer)
    const {authReducer} = useSelector((rootReducer) => rootReducer)
    const [fail, setFail] = useState("")

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async() => {
    const payLoad = {
      email: email,
      password: password,
      role:"Admin"
    };
    axios
      .post(API.REGISTER_CUSTOMER, payLoad)
      .then((res) => {
        console.log(res)
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => setFail(err.message))
    
    
  }
  console.log("user" ,userReducer.user)


   return (
      <div className="register-base">
        <div className="register-coloumn">
        <div className="register-form-section">
          <div className="register-form-section-input">
            <div className="register-greetings">
            <div className="register-rectangle">
          </div>
            <h1>Sign Up</h1>
          </div>
          <div className="register-input-block">
            {
          !!fail ? (
            <div className="fail-reg">
            <label>
            Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
            </label>  
            </div>
          ) : (null)} 
            <label>Name</label>
            <input
              onChange={handleName}
              placeholder="input email"
              type="email"
              className="register-input"
            />
            <div className="register-input-block">
            <label>Email</label>
            <input
              onChange={handleEmail}
              placeholder="input email"
              type="email"
              className="register-input"
            />
            </div>
            <div className="register-input-block">
            <label>Password</label>
            <input
              typeof="password"
              onChange={handlePassword}
              placeholder="input password"
              type="password"
              className="register-input"
            />
            </div>
          </div>
          <span></span>
          <div className="register-sign-button">
            <button onClick={handleRegister} className="register-button">
              Sign-Up
            </button>
            </div>
        </div>
          <div className="register-link-text">
            <h3>Already have an account ? <a href="/login">Sign In here</a></h3>
            </div>
      </div>
      
      </div>
      <div className="splash-register-customer">
            <img src={SplashLoginCustomer}/>
      </div>
    </div>
  );
};

export default RegisterCustomer