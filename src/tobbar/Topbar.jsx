import "./topbar.css";
import pic from "../pic/k1.png";

export default function Topbar() {
  return (
    <div className="top">
        <div className="topLeft">l</div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img 
              className="topImg"
              src={pic}
              alt=""
            />
        </div>
    </div>
  )
}
