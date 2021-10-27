import { useRef, useState } from "react";
import "./grievanceform.css";
import axios from "axios";

import { useAuthState } from "../../context/ContextIndex";

function Grievanceform() {
  const user = useAuthState();
  const token = user.token;

  const grievanceType = useRef("null");
  const grievanceCat = useRef("null");
  const grievanceText = useRef("null");
  const isAnonymous = useRef("null");
  const suggestion = useRef("null");
  
  const [selected, setSelected] = useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const academic = ["Fee", "Library and Lab", "Examination", "Faculty", "Training and Placement", "Scholarship", "Other"];
  const nonacademic = ["Mental Health", "Anti-Ragging", "Transportation", "Club Activities", "Lost and Found Items", "Parking Issues", "Maintenance", "Sanitation", "Hostel Facilities", "Canteen", "Sports and NCC", "Other"];

  let somevar = null;
  let categoryoptions = null;

  if (selected === "Academic") {
    somevar = academic;
  }else if (selected === "Non Academic") {
    somevar = nonacademic;
  }


  if (somevar) {
    categoryoptions = somevar.map((el) => <option key={el}>{el}</option>);
  }

  const [submitMsg, setSubmitMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://sgsapi.herokuapp.com/gri/grievance",
        {
          gri_type: grievanceType.current.value,
          gri_category: grievanceCat.current.value,
          gri_text: grievanceText.current.value,
          gri_suggestion: suggestion.current.value,
          reported_by: isAnonymous.current.checked
            ? "Anonymous"
            : user.userDetails.username,
          user_id: isAnonymous.current.checked
            ? null
            : user.userDetails.user_id,
        },
        {
          headers: { "auth-token": token },
        }
      )
      .then((result) => {
        console.log(result);
        setSubmitMsg(result.data);
      })
      .catch((err) => {
        console.log(err);
        setSubmitMsg("Sorry! some error occurred, please try again!");
      });
  };

  return (
    <>
      <form className="grievanceForm" onSubmit={handleSubmit}>
        <p className="formTitle">Report Your Grievance Here:</p>
        <div className="form-top-inputs-cont">
          <div className="inputContainer">
            <label className="inputLabel1" htmlFor="Type_of_Complaint">
              Type of Complaint:
            </label>
            <select
              className="form-top-inputs form-inputs"
              name="Type of Complaint"
              id="Type_of_Complaint"
              defaultValue="-"
              ref={grievanceType}
              onChange={changeSelectOptionHandler}
            >
              <option value="-" disabled selected>
                Select Grievance Type
              </option>
              <option value="Academic">Academic</option>
              <option value="Non Academic">Non Academic</option>
              
            </select>
          </div>

          <div className="inputContainer">
            <label className="inputLabel2" htmlFor="Category">
              Select Category:
            </label>
            <select
              className="form-inputs form-top-inputs"
              name="Category"
              placeholder="Select Category"
              id="scroll-Category"
              defaultValue="-"
              ref={grievanceCat}
              // size="1"
            >
              <option value="-" disabled selected className="category-options" >
                Select Grievance Category
              </option>
              {/* <option value="Category1">Category1</option>
              <option value="Category2">Category2</option> */}
              {/* <div className="category-options"> */}
                {categoryoptions}
                {/* </div> */}
              
            </select>
          </div>
        </div>
        <div className="inputContainer3">
          <label className="inputLabel3" htmlFor="Your_grievance">
            Your Grievance:
          </label>

          <textarea
            className="form-inputs"
            type="text"
            id="Your_grievance"
            name="Your grievance"
            placeholder="Type Your Grievance"
            required="true"
            ref={grievanceText}
          ></textarea>
        </div>
        <div className="inputContainer3">
          <label className="inputLabel3" htmlFor="Your_suggestion">
            Any suggestion/solution:
          </label>

          <textarea
            className="form-inputs"
            type="text"
            name="Your_suggestion"
            placeholder="Write here"
            ref={suggestion}
          ></textarea>
        </div>

        <div className="checkboxContainer">
          <input
            className="checkbox"
            id="Submit_Anonymously"
            name="Submit Anonymously"
            type="checkbox"
            ref={isAnonymous}
          />

          <label className="labelAnonymously" htmlFor="Submit_Anonymously">
            Submit Anonymously
          </label>
        </div>

        <div className="buttonContainer">
          <label htmlFor="submit">
            <button className="buttonSubmit" id="submit" type="submit">
              Submit
            </button>
          </label>
        </div>
        <label className="submit-msg" htmlFor="Your_suggestion">
          {submitMsg ? "Grievance reported successfully!" : null}
        </label>
      </form>
    </>
  );
}

export default Grievanceform;
