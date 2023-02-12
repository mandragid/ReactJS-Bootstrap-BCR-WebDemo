import "../admin/loginAdmin.css";
import RectangleIcon from "../../assets/icon_rectangle.png";

const LoginAdmin = () => {
  return (
    <div className="loginAdmin-container">
      <div className="loginAdmin-content-container">
        <div className="loginAdmin-rectangle">
          <img src={RectangleIcon} alt="icon-rectangle"></img>
        </div>
        <div className="loginAdmin-heading">
          <h1>Welcome, Admin BCR</h1>
        </div>
        <div className="input-container">
          <div className="loginAdmin-input-label">
            <h6>Email</h6>
          </div>
          <div className="loginAdmin-input">
            <input type="email" placeholder="Contoh: johndee@gmail.com"></input>
          </div>
        </div>
        <div className="input-container">
          <div className="loginAdmin-input-label">
            <h6>Password</h6>
          </div>
          <div className="loginAdmin-input">
            <input type="password" placeholder="6+ Karakter"></input>
          </div>
        </div>
        <div className="loginAdmin-btn-container">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
