import "./categorysection.css";
import { Link } from "react-router-dom";

function Categorysection() {
  return (
    <>
      <div className="categorySection">
        <h1 className="category-heading">Know More:</h1>

        <div className="row">
          

          <Link style={{textDecoration: 'none', color: "black" }} to = '/MentalHealth'>
          <div className="item">
          <img
              className="categoryLogo"
              src="assets/CategoryLogo/mental-health.png"
              alt="mental-health-logo"
            />

            <div className="category-text">
            <p>Mental Health Support</p>
             
            </div>
            
          </div>
          </Link>

            <Link style={{textDecoration: 'none', color: "black" }} to = '/FeeRelatedIssues'>
          <div className="item">
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/fees.png"
              alt="mental-health-logo"
            />
            <div className="category-text">
              <p>Fee Related Issues</p>
            </div>
            
            
          </div>
            </Link>

          <Link style={{textDecoration: 'none', color: "black" }} to = '/LostandFound'>
          <div className="item">
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/lost-and-found.png"
              alt="mental-health-logo"
            />
            <div className="category-text">
              <p>Lost & Found</p>
            </div>
            
            
          </div>
            </Link>
        </div>

        <div className="row">
          <Link style={{textDecoration: 'none', color: "black" }} to = '/TransportationIssues'>
          <div className="item">
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/public-transport.png"
              alt="mental-health-logo"
            />
            <div className="category-text">
              <p>Transportation Issues</p>
            </div>
            
          </div>
            </Link>

          <Link style={{textDecoration: 'none', color: "black" }} to = '/AntiRagging'>
          <div className="item">
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/stop-violence.png"
              alt="mental-health-logo"
            />

            <div className="category-text">
              <p>Anti Ragging</p>
            </div>
            
          </div>
            </Link>

          <Link style={{textDecoration: 'none', color: "black" }} to = '/LibandLabIssues'>
          <div className="item">
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/study.png"
              alt="mental-health-logo"
            />
            <div className="category-text">
              <p>Library & Lab Issues</p>
            </div>
            
          </div>
            </Link>
        </div>
      </div>
    </>
  );
}

export default Categorysection;
