import Sidebar from "../../components/sidebar/sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <div className="settingsUpdateTitle">Update Your Account</div>
          <div className="settingsDeleteTitle">Delete Account</div>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://www.pexels.com/photo/man-standing-on-a-rock-1271619"
              alt=""
            />
            <label htmlFor="fileInput"></label>
            <input type="file" id="fileInput" style={{ display: "" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="karthik" />
          <label>Email</label>
          <input type="email" placeholder="karthik@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
