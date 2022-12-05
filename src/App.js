import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchCar from "./Pages/SearchCar";
import SearchResult from "./Pages/SearchResult";
import CarDetail from "./Pages/CarDetail";
import LandingPage from "./Pages/LandingPage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/cari-mobil" element={<SearchCar />} />
					<Route path="/hasil-pencarian" element={<SearchResult />} />
					<Route path="/detail-paket/:id" element={<CarDetail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
