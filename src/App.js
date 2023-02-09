import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchCar from "./Pages/SearchCar";
import SearchResult from "./Pages/SearchResult";
import CarDetail from "./Pages/CarDetail";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./admin/Pages/Dashboard";
import PaymentPage1 from "./Pages/Payment1Page";
import Login from "./admin/Pages/LoginAdmin";
import Register from "./admin/Pages/RegisterAdmin";
import RegisterCustomer from "./Pages/RegisterCustomer";
import LoginCustomer from "./Pages/LoginCustomer";
import CarList from "./admin/Pages/CarList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cari-mobil" element={<SearchCar />} />
          <Route path="/hasil-pencarian" element={<SearchResult />} />
          <Route path="/detail-paket/:id" element={<CarDetail />} />
          <Route path="/payment1/:id" element={<PaymentPage1 />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/cars" element={<CarList />} />
          <Route path="/admin/Login" element={<Login />} />
          <Route path="/admin/Register" element={<Register />} />
          <Route path="/Login" element={<LoginCustomer />} />
          <Route path="/Register" element={<RegisterCustomer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
