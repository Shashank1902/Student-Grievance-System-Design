import { Link } from "react-router-dom";
import "./topnavbar.css";
import { useAuthState } from "../../context/ContextIndex";

function TopNavbar() {
  const user = useAuthState();

  return (
    <>
      <div>
        <div className="title">
          <span className="angular">&lt;</span>
          <span>em</span>
          <span className="angular">&gt;</span>
          <span>brace</span>
        </div>
        <div className="flex-container">
          <div className="nav-container1">
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="nav-item">Home</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/StudentCommunity">
              <span className="nav-item">StudentCommunity</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Help">
              <span className="nav-item">Help</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Contact">
              <span className="nav-item">Contact</span>
            </Link>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Profile"
          >
            <div className="nav-container2">
              <span className="profile-text">
                {user.userDetails ? user.userDetails.username : "Unknown"}
              </span>
              <span>
                <img className="icon" src="assets/profileicon.png" alt="User" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default TopNavbar;
