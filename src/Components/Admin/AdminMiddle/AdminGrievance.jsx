import React from "react";
import "./admingrievance.css";

function AdminGrievance() {
  // const read = () => {};

  return (
    <>
      <div className="grievance-container">
        <div className="grievance-wrapper">
          <div className="grievance-top">
            <div className="grievance-id">
              <span>Grievance ID:12345</span>
            </div>
            <div className="grievanve-logo">
              <img
                className="admin-grievance-logo"
                src="assets/admin-grievance-bookmark.png"
                alt=""
              />
              <img
                className="admin-grievance-logo"
                src="assets/admin-grievance-search.png"
                alt=""
              />
            </div>
          </div>

          <div className="grievance-middle">
            <div className="grievance-name">
              <span>Name : Sanket Raikwar</span>
            </div>
            <div className="grievance-desc">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, temporibus architecto ab nihil soluta ea tempora,
                aspernatur distinctio quam, aliquam obcaecati labore. Soluta
                impedit molestias doloremque atque veritatis deserunt. Quaerat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti distinctio ipsa cupiditate molestiae a quidem libero
                quam tenetur ad incidunt. Minima fugit voluptate non in, cumque
                odit consectetur delectus amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Minima porro, quidem consequuntur
                necessitatibus tempora quasi cumque quaerat repellendus. Id quis
                commodi odio provident alias ullam nesciunt fugiat hic
                repellendus eligendi.
              </span>
            </div>
          </div>

          <div className="grievance-bottom">
            <div className="grievance-report-date">
              <span>Reported on:10 oct 21</span>
            </div>
            <div className="read">
              <button className="read-btn" type="button">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminGrievance;
