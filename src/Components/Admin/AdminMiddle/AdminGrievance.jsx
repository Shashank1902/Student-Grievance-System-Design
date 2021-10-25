import { useState,useEffect ,useRef} from "react";
import "./admingrievance.css";

function AdminGrievance() {
    const showMoreBtn = useRef("null");
    const showLessBtn = useRef("null")
    const adminOverlayContainer = useRef("null");
    const grievanceMainConatiner = useRef("null");
    

    useEffect(() => {
      showMoreBtn.current.addEventListener("click", () => {
        adminOverlayContainer.current.classList.remove("hidden");
        showLessBtn.current.classList.remove("hidden");
        grievanceMainConatiner.current.classList.add("blur-effect")
        document.querySelector(".admin-button-container ").classList.add("blur-effect")
        document.querySelector(".rightpanel-container").classList.add("blur-effect")
        
        
      });
      showLessBtn.current.addEventListener("click", () => {
        adminOverlayContainer.current.classList.add("hidden");
        document.querySelector(".admin-button-container ").classList.remove("blur-effect")
        showLessBtn.current.classList.add("hidden");
        grievanceMainConatiner.current.classList.remove("blur-effect")
        document.querySelector(".admin-button-container ").classList.remove("blur-effect")
        document.querySelector(".rightpanel-container").classList.remove("blur-effect")
      });


    }, [])


  return (
    <>
    
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


     {/* overlay------------ */}


      <img className="admin-overlay-cross hidden" src="assets/admin-overlay-cross.png" alt="" ref ={showLessBtn} />
      <div className="adminGrievanceOverlay hidden" ref={adminOverlayContainer}>
        
        <div className="adminGrievanceOverlayWrapper">
        
         
          <div className="grievance-overlay-top">
            
            <div className="grievance-overlay-id">
              <span>Grievance ID:12345</span>
            </div>
            <div className="grievanve-overlay-logo">
              <i className="admin-grievance-overlay-bookmark fas fa-bookmark"></i>
              <img
                className="admin-grievance-overlay-search"
                src="assets/admin-grievance-search.png"
                alt=""
              />
              
            </div>
          </div>

          <div className="grievance-overlay-middle">
            <div className="grievance-overlay-name">
              <span>Name : Sanket Raikwar</span>
            </div>
            <div className="grievance-overlay-info-box">
              <div className="grievance-overlay-info-left">
                <span>Institute Id :23263898273</span>
                <span>Contect No :23263898273</span>
              </div>
              <div className="grievance-overlay-info-right">
                <span>Email :abc@gmail.com</span>
                <span>Branch : CSE</span>
              </div>
            </div>
            <div className="grievance-overlay-desc-box">
              <span className="grievance-overlay-desc-heading">
                Grievance Reported:
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, temporibus architecto ab nihil soluta ea tempora,
                aspernatur distinctio quam, aliquam obcaecati labore. Soluta
                impedit molestias doloremque atque veritatis deserunt. Quaerat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                
              </span>
            </div>
          </div>

          <div className="grievance-overlay-bottom">
            <div className="grievance-overlay-report-date">
              <span>Reported on:10 oct 21</span>
            </div>
            <div className="grievance-overlay-status">
              <span>Status : Pending</span>
            </div>
          </div>
          <div className="grievance-overlay-bottom-rply-container">
            <div className="grievance-overlay-mark-box">
              <label class="grievance-overlay-mark-container">
                Mark Solved:
                <input type="checkbox" />
                <span class="grievance-overlay-checkmark"></span>
              </label>
            </div>
            <div className="grievance-overlay-reply-container">
            <div className="grievance-overlay-reply-heading-box">
            <span className="grievance-overlay-reply-heading">
                Reply Something:
              </span>
            </div>
            
              <div className="grievance-overlay-reply-input-container">
                <div className="grievance-overlay-reply-wrapper">
                  <div className="grievance-overlay-rply-box">
                    <span className="grievance-overlay-rply-box-heading">Admin:</span>
                    <input placeholder="Reply" className="grievance-overlay-rply-box-input" type="text" />
                
                    <span className="grievance-overlay-rply-box-heading">Student Name:</span>
                    <input placeholder="Reply" className="grievance-overlay-rply-box-input" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default AdminGrievance;
