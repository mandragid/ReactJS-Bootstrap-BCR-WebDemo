
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import NavBar from "../components/NavBar"
import axios from "axios"

const Register = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleRegis = () => {
        const payload = {
            email: email,
            password: password,
            role: "Admin",
        }
    axios
    .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/register" ,payload)
    .then((res) =>{
    Navigate("/")
    })
    .catch((err) => console.log(err))

    }

    return (
         <div>
            <NavBar />
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
        </div>
        
    )
}

export default Register