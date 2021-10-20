import "./grievance.css";

function Grievance() {
  return (
    <>
      <div className="grievance-box">
        <div className="content">
          <div className="grievance-top-cont">
            Grievance ID: 234567
            <div className="bookmark">
              <i className="fas fa-bookmark"></i>
            </div>
          </div>
          <div className="grievance-middle-cont">
            <p>Name: Shubham Vyas</p>
          </div>
          <div className="matter">
            Goodafternoon sir/mam
            <br />I am from 3rd sem EC branch studying in ggct.I have lost my
            library card hence im unable to issue books of this sem.Pls tell me
            who to consult regarding the regeneration of admit card.Also,the
            exams are coming near so is it possible that i could get the books
            beforehand and when i get the card back i’ll get them issued via the
            card.
          </div>
          <div className="grievance-foot">
            <div className="timestamp">
              <small>6:45 pm</small>
            </div>

            <div className="status">
              <small>Status: Pending</small>
              <div className="status-icon">
                <i className="fas fa-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grievance;
