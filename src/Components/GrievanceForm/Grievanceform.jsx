import "./grievanceform.css";

function Grievanceform() {
  return (
    <>
      <form className="grievanceForm">
        <p className="formTitle">Report Your Grievance Here:</p>
        <div className="inputContainer1">
          <label className="inputLabel1" htmlFor="Type_of_Complaint">
            Type of Complaint:
          </label>
          <select
            className="formSelect1"
            name="Type of Complaint"
            id="Type_of_Complaint"
            defaultValue="-"
          >
            <option value="-" disabled>
              Select Grievance Type
            </option>
            <option value="Academic">Academic</option>
            <option value="Non Academic">Non Academic</option>
          </select>
        </div>

        <div className="inputContainer2">
          <label className="inputLabel2" htmlFor="Category">
            Select Category:
          </label>
          <select
            className="formSelect2"
            name="Category"
            placeholder="Select Category"
            id="Category"
            defaultValue="-"
          >
            <option value="-" disabled>
              Select Grievance Category
            </option>
            <option value="Category1">Category1</option>
            <option value="Category2">Category2</option>
          </select>
        </div>

        <div className="inputContainer3">
          <label className="inputLabel3" htmlFor="Your_grievance">
            Your Grievance:
          </label>

          <textarea
            className="formSelect3"
            type="text"
            id="Your_grievance"
            name="Your grievance"
            placeholder="Type Your Grievance"
          ></textarea>
        </div>

        <div className="checkboxContainer">
          <input
            className="checkbox"
            id="Submit_Anonymously"
            name="Submit Anonymously"
            type="checkbox"
          />

          <label className="labelAnonymously" htmlFor="Submit_Anonymously">
            Submit Anonymously
          </label>
        </div>

        <div className="buttonContainer">
          <label htmlFor="submit">
            <button className="buttonSubmit" id="submit">
              Submit
            </button>
          </label>
        </div>
      </form>
    </>
  );
}

export default Grievanceform;
