import { useState } from "react";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { API } from "../const/endpoint";
import { userAction } from "../Redux/userAction";
import { useEffect } from "react";

const Login = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

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
		dispatch(userAction(payLoad));
	};

	const handleRedirect = () => {
		const token = localStorage.getItem("token");
		setTimeout(() => {
			if (!!token) {
				navigate("/admin/dashboard");
			}
		}, 2000);
	};

	useEffect(() => {
		handleRedirect();
	});

	return (
		<div>
			<NavBar />
			{
				<div className="register-section">
					<div>
						<h1>Login Admin</h1>
					</div>
					<div className="register-input-bg">
						<input onChange={handleEmail} placeholder="input email" type="email" className="register-input" />
						<input onChange={handlePassword} placeholder="input password" type="password" className="register-input" />
					</div>
					<div className="register-button-bg">
						<button onClick={handleLogin} className="register-button">
							login
						</button>
					</div>
				</div>
			}
		</div>
	);
};

export default Login;
