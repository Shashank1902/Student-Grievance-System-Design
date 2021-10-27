import { useState,useEffect ,useRef} from "react";
import AdminGrievanceOverlay from "../AdminGrievanceOverlay/AdminGrievanceOverlay";
import "./admingrievance.css";

function AdminGrievance() {
    const showMoreBtn = useRef("null");
    const showLessBtn = useRef("null")
    const adminOverlayContainer = useRef("null");
    const grievanceMainConatiner = useRef("null");
    const overlay = useRef("null");
    

    useEffect(() => {
      showMoreBtn.current.addEventListener("click", () => {
        adminOverlayContainer.current.classList.remove("hidden");
        showLessBtn.current.classList.remove("hidden");
        grievanceMainConatiner.current.classList.add("blur-effect")
        document.querySelector(".admin-button-container ").classList.add("blur-effect")
        // document.querySelector(".rightpanel-container").classList.add("blur-effect")
        overlay.current.classList.remove("hidden");
        
      });
      showLessBtn.current.addEventListener("click", () => {
        adminOverlayContainer.current.classList.add("hidden");
        document.querySelector(".admin-button-container ").classList.remove("blur-effect")
        showLessBtn.current.classList.add("hidden");
        grievanceMainConatiner.current.classList.remove("blur-effect")
        document.querySelector(".admin-button-container ").classList.remove("blur-effect")
        // document.querySelector(".rightpanel-container").classList.remove("blur-effect");
        overlay.current.classList.add("hidden");
      });


    }, [])


  return (
    <>
    <div className="overlay hidden" ref={overlay}></div>
      <div className="grievance-container " ref={grievanceMainConatiner}>
        <div className="grievance-wrapper">
          <div className="grievance-top">
            <div className="grievance-id">
              <span>Grievance ID:12345</span>
            </div>
            <div className="grievanve-logo">
              <i className="fas fa-bookmark"></i>
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
            <div className="read" >
              <button
                ref = {showMoreBtn}
                className="read-btn"
                type="button"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>


    


      <img className="admin-overlay-cross hidden" src="assets/admin-overlay-cross.png" alt="" ref ={showLessBtn} />
      <div className="hidden" ref={adminOverlayContainer}>
        <AdminGrievanceOverlay/>
      </div>
    </>
  );
}

export default AdminGrievance;
