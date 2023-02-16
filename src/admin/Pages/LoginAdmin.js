import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AdminCarSplash from "../img/AdminCarSplash.png";
import "./LoginAdmin.css";
import { authReducer, userReducers } from "../../Redux/AuthReducer";
import { userAction } from "../../Redux/authAction";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userReducer } = useSelector((rootReducer) => rootReducer);
  const { authReducer } = useSelector((rootReducer) => rootReducer);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const payLoad = {
      email: email,
      password: password,
    };
    await dispatch(userAction(payLoad));

    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 2000);
  };
  // console.log("user", userReducer.user);

  return (
    <div>
      <div className="base">
        <div className="splashImage">
          <img src={AdminCarSplash} />
        </div>
        <div className="form-section">
          <div className="rectangle"></div>
          <div className="greetings">
            <h1>Welcome, Admin BCR</h1>
          </div>
          {/* {!!userReducer.message.length ? (
            <div>
              <label>
                Masukkan username dan password yang benar. Perhatikan penggunaan
                huruf kapital.
              </label>
            </div>
          ) : null} */}
          <div className="form-section-input">
            <div className="input-block">
              <label>Email</label>
              <input
                onChange={handleEmail}
                placeholder="input email"
                type="email"
                className="register-input"
              />
            </div>
            <div className="input-block">
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
          <div className="sign-button">
            <button onClick={handleLogin} className="login-button">
              Sign-In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
