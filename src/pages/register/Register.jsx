import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
        <label>Username</label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="email"
          className="RegisterInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="RegisterInput"
          placeholder="Enter your password..."
        />
        <button className="RegisterButton">Register</button>
      </form>
      <button className="RegisterLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
