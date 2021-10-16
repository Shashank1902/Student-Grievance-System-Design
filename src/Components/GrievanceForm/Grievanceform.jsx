import { useRef } from "react";
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
      })
      .catch((err) => {
        console.log(err);
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
            >
              <option value="-" disabled>
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
              id="Category"
              defaultValue="-"
              ref={grievanceCat}
            >
              <option value="-" disabled>
                Select Grievance Category
              </option>
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
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
      </form>
    </>
  );
}

export default Grievanceform;
