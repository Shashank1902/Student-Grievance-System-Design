import "./categorysection.css";
import {Link} from 'react-router-dom'
// import {HashLink as Link} from 'react-router-hash-link'

function Categorysection() {
  return (
    <>
      <div className="categorySection">
        <h1 className="category-heading">Know More:</h1>

        <div className="row">
          

          <div className="item">
          <Link style={{textDecoration: 'none'}} to = '/MentalHealth'>
          <img
              className="categoryLogo"
              src="assets/CategoryLogo/mental-health.png"
              alt="mental-health-logo"
            />

            <div className="category-text">
            <p>Mental Health Support</p>
             
            </div>
          </Link>
            
          </div>

          <div className="item">
            <Link style={{textDecoration: 'none'}} to = '/FeeRelatedIssues'>
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/fees.png"
              alt="mental-health-logo"
            />
            <div className="category-text">
              <p>Fee Related Issues</p>
            </div>
            
            </Link>
            
          </div>

          <div className="item">
          <Link style={{textDecoration: 'none'}} to = '/LostandFound'>
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/lost-and-found.png"
              alt="mental-health-logo"
            />
            <div className="category-text">
              <p>Lost & Found</p>
            </div>
            
            </Link>
            
          </div>
        </div>

        <div className="row">
          <div className="item">
          <Link style={{textDecoration: 'none'}} to = '/TransportationIssues'>
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/public-transport.png"
              alt="mental-health-logo"
            />
            <div className="category-text">
              <p>Transportation Issues</p>
            </div>
            
            </Link>
          </div>

          <div className="item">
          <Link style={{textDecoration: 'none'}} to = '/AntiRagging'>
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/stop-violence.png"
              alt="mental-health-logo"
            />

            <div className="category-text">
              <p>Anti Ragging</p>
            </div>
            
            </Link>
          </div>

          <div className="item">
          <Link style={{textDecoration: 'none'}} to = '/LibandLabIssues'>
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/study.png"
              alt="mental-health-logo"
            />
            <div className="category-text">
              <p>Library & Lab Issues</p>
            </div>
            
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categorysection;
