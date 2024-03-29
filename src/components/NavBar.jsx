import "../components/NavBar.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterCustomer from "../Pages/RegisterCustomer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { AuthCheckCustomer } from "../Redux/authAction";

function NavBar() {
	const {authReducer} = useSelector((state)=>state)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    
	useEffect(() => {
        dispatch(AuthCheckCustomer())
    }, []);

    const handleLogout = (() => {
        localStorage.removeItem("token")
        dispatch({
            type:"LOGOUT",
            payload: false,
        })
        Navigate("/")
    })
	console.log(authReducer.isLogin)
	return (
		<div className="container-fluid Wrapper">
			{/* Navigation Bar */}
			<div className="container-fluid">
				<Navbar expand="lg" variant="light">
					<Container>
						<Navbar.Brand href="/">BCR</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto LinkNav">
								<Nav.Link href="#Services">Our Services</Nav.Link>
								<Nav.Link href="#WhyUs">Why Us</Nav.Link>
								<Nav.Link href="#Testimonial">Testimonial</Nav.Link>
								<Nav.Link href="#FAQ">FAQ</Nav.Link>
								{authReducer.isLogin == false ? (
								<Button href="/Register" variant="success" className="regButton">
								Register
								</Button>
								) : ( 
								<Button onClick={handleLogout} href="/" variant="success" className="regButton">
								Log-out
								</Button>
								)}
								
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
			{/* End of Navigation Bar */}
		</div>
	);
}

export default NavBar;