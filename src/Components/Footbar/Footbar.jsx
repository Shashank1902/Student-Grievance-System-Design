import "./footbar.css";
import { Link } from "react-router-dom";

function Footbar() {
  return (
    <>
      <div className="foot-container">
        <div className="foot">
          <Link style={{ textDecoration: "none", color: "white"}} to="/StudentCommunity">
            <p>Student Community</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/Profile">
            <p>Profile</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/AboutUs">
            <p>About Us</p>
          </Link>
        </div>
        <div className="foot">
          <p>Contact Developer</p>
          <p>Report</p>
          <p>Feedback</p>
        </div>
        <div className="footbars">
          <p>
            Designed and developed by team &lt;em&gt;brace, CSE 2019-23
          </p>
        </div>
      </div>
    </>
  );
}

export default Footbar;
