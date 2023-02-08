import AdminNavbar from "../Components/AdminNavbar";
import { Link } from "react-router-dom";
import HomeLogo from "../img/Home_Logo.png";
import CarsLogo from "../img/Cars_Logo.png";
import "./Dashboard.css";

function CarList() {
	return (
		<div className="container-fluid admin-dashboard">
			<div className="row">
				<div className="col-1 sidebar">
					<div className="row">
						<Link to={"/admin/dashboard"}>
							<div className="home">
								<img src={HomeLogo} alt="x" className="" />
								<p>Home</p>
							</div>
						</Link>
						<Link to={"/admin/cars"}>
							<div className="cars">
								<img src={CarsLogo} alt="x" className="" />
								<p>Cars</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="col admin-nav ">
					<AdminNavbar />
				</div>
			</div>
		</div>
	);
}

export default CarList;
