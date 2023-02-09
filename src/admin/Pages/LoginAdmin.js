import { useState } from "react";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { API } from "../../const/endpoint";
import AdminCarSplash from "../img/AdminCarSplash.png"

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => { 
        setPassword(e.target.value)
    }

    const handleLogin = async() => {
        const payLoad = {
            email: email,
            password: password
        }
        axios
            .post(API.LOGIN, payLoad)
            .then((ress) => {
                console.log(ress)
                localStorage.setItem("token", ress.data.access_token);
                Navigate("/discovery")
            })
            .catch((err) => console.log(err.message))
    }
    
    return ( 
        <div>
            <NavBar />
            <div className="splashImage">
            <img src={AdminCarSplash}></img>
            </div>
            <div className="formHolder">
            {(
                    <div className="register-section">
                        <div>
                            <h1>Login Admin</h1>
                        </div>
                        <div className='register-input-bg'>
                            <input onChange={handleEmail} placeholder='input email'type='email' className='register-input'/>
                            <input onChange={handlePassword} placeholder='input password' type='password' className='register-input'/>
                        </div>
                        <div className='register-button-bg'>
                            <button onClick={handleLogin} className='register-button'>login</button>
                        </div>
                    </div>)
            }
            </div>
        </div>
        
     );
}

export default Login