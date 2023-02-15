import axios, { Axios } from 'axios';
import { useState } from 'react';
import { API } from '../const/endpoint';
import './Register.css'
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegis = async() => {
        const payLoad = {
            email : email,
            password : password,
            role : "Admin",
        }

    try {
        const res = await axios.post(API.REGISTER, payLoad)
        navigate("/login")
    } catch (error) {
        console.log(error)
        if (error.request.status == 500) {
            setError("email tidak valid")
        } else {
            setError(error.response.data.message) 
        } 
    }

        // axios
        //     .post(API.REGISTER, payLoad)
        //     .then((res) => {
        //         navigate("/login")
        //     })
        //     .catch((err) => console.log(err.message))
    }

    // console.log(email)

    return ( 
        <div>
            <Navbar />
            <div className="register-section">
                <div>
                    <h1>Register Admin</h1>
                </div>
                <div className='register-input-bg'>
                    <input onChange={handleEmail} placeholder='email'type='email' className='register-input'/>
                    <input onChange={handlePassword} placeholder='password' type='password' className='register-input'/>
                </div>
                <div className='register-button-bg'>
                    <button onClick={handleRegis} className='register-button'>register</button>
                </div>
            </div>
            {!!error.length && (<h1>{error}</h1>)}
        </div>
        
     );
}
 
export default Register;