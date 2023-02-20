import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchCar from "./Pages/SearchCar";
import SearchResult from "./Pages/SearchResult";
import CarDetail from "./Pages/CarDetail";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./admin/Pages/Dashboard";
import PaymentPage1 from "./Pages/PaymentPage1";
import PaymentPage2 from "./Pages/PaymentPage2";
import Login from "./admin/Pages/LoginAdmin";
import Register from "./admin/Pages/RegisterAdmin";
import RegisterCustomer from "./Pages/RegisterCustomer";
import LoginCustomer from "./Pages/LoginCustomer";
import CarList from "./admin/Pages/CarList";
import ProtectedRouteAdmin from "./hoc/ProtectedRouteAdmin";
import AdminAddCar from "./admin/Pages/AdminAddCar";
import AdminEditCar from "./admin/Pages/AdminEditCar";
import ProtectedRoute from "./hoc/ProtectedRouteCustomer";
import TicketPage from "./Pages/TicketPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<LoginCustomer />} />
          <Route path="/Register" element={<RegisterCustomer />} />
          <Route path="/cari-mobil" element={<SearchCar />} />
          <Route path="/hasil-pencarian" element={<SearchResult />} />
          <Route path="/detail-paket/:id" element={<CarDetail />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/payment1/:id" element={<PaymentPage1 />} />
            <Route path="/payment2/:id/" element={<PaymentPage2 />} />
            <Route path="/Ticket/:id/" element={<TicketPage />}/>
          </Route>
          <Route element={<ProtectedRouteAdmin />}>
            <Route path="/admin/cars" element={<CarList />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/addcar" element={<AdminAddCar />} />
            <Route path="/admin/edit-car/:id" element={<AdminEditCar />} />
          </Route>
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
