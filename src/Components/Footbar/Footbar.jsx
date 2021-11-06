import "./footbar.css";
import { Link } from "react-router-dom";

function Footbar() {
  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a
        href={
          `mailto:${email}?subject=${encodeURIComponent(subject) || ""}&body=${encodeURIComponent(body) || ""}`
        }
      >
        {children}
      </a>
    );
  };

  return (
    <>
      <div className="foot-container">
        <div className="foot">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/StudentCommunity"
          >
            <p>Student Community</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Profile"
          >
            <p>Profile</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/AboutUs"
          >
            <p>About Us</p>
          </Link>
        </div>
        <div className="foot">
          <p>
            <Mailto email="shashank1902aman@gmail.com">
              Contact Developer
            </Mailto>
          </p>
          <p>
            <Mailto
              email="shashank1902aman@gmail.com"
              subject="Report for embrace"
            >
              Report
            </Mailto>
          </p>
          <p>
            <Mailto
              email="shashank1902aman@gmail.com"
              subject="Feedback for embrace"
            >
              Feedback
            </Mailto>
          </p>
        </div>
        <div className="footbars">
          <p>Designed and developed by team &lt;em&gt;brace, CSE 2019-23</p>
        </div>
      </div>
    </>
  );
}

export default Footbar;
