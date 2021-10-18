import { Link } from "react-router-dom";
import "./topnavbar.css";
import { useAuthState } from "../../context/ContextIndex";
import { useHistory } from "react-router-dom";
import { logout, useAuthDispatch } from "../../context/ContextIndex";

function TopNavbar() {
  const user = useAuthState();
  let history = useHistory();
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logout(dispatch);
    history.push("/login");
  };


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
            <Link style={{ textDecoration: "none" }} to="/AboutUs">
              <span className="nav-item">About Us</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Contact">
              <span className="nav-item">Contact</span>
            </Link>
          </div>
          <div className="nav-container2">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Profile"
            >
              <span>
                <img
                  className="navbar-profile-icon"
                  src="assets/profileicon.png"
                  alt="User"
                />
              </span>
              <span className="profile-text">
                {user.userDetails ? user.userDetails.username : "Unknown"}
              </span>
            </Link>
            <span className="navbar-logout-icon" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopNavbar;
