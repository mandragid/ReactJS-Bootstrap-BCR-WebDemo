import './App.css';
import Home from './Pages/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Route, Routes } from 'react-router';
import ProtectedRoute from './hoc/ProtectedRoute';
import Discovery from './Pages/Discovery';
import CarDetail from './Pages/CarDetail';
import EditForm from './Pages/EditForm';
import NewForm from './Pages/NewForm';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      
      <Route element={<ProtectedRoute />}>
        <Route path='/Discovery' element = {<Discovery/>} />
        <Route path='/CarDetail/:id' element = {<CarDetail/>} />
        <Route path ='/EditForm/:id' element = {<EditForm/>}/>
        <Route path ='/NewForm/' element = {<NewForm/>}/>
      </Route>
    </Routes>
      
  );
}

export default App;
