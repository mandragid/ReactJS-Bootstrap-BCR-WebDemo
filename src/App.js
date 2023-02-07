import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchCar from "./Pages/SearchCar";
import SearchResult from "./Pages/SearchResult";
import CarDetail from "./Pages/CarDetail";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./admin/Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/cari-mobil" element={<SearchCar />} />
					<Route path="/hasil-pencarian" element={<SearchResult />} />
					<Route path="/detail-paket/:id" element={<CarDetail />} />
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path='/admin/Login' element = {<Login/>} />
      				<Route path='/admin/Register' element = {<Register/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
