import "./categorysection.css";

function Categorysection() {
  return (
    <>
      <div className="categorySection">
        <h1 className="category-heading">Know More:</h1>

        <div className="row">
          <div className="item">
            <img
              className="categoryLogo"
              src="assets/CategoryLogo/mental-health.png"
              alt="mental-health-logo"
            />

            <p className="category-text">Mental Health Support</p>
          </div>

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
        </div>

        <div className="row">
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
        </div>
      </div>
    </>
  );
}

export default Categorysection;
