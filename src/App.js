import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import WhyUs from "./components/WhyUs";
import Testimony from "./components/Testimony";
import RentNow from "./components/RentNow";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CariMobil from "./components/CariMobil";
import Services from "./components/Services";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<div>
								<NavBar />
								<Services />
								<WhyUs />
								<Testimony />
								<RentNow />
								<FAQ />
								<Footer />
							</div>
						}
					/>
					<Route exact path="/cari-mobil" element={<CariMobil />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
