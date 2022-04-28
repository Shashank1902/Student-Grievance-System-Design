import React, { useRef, useState } from "react";
import "./AdminButtons.css";

function AdminButtons() {
  const [selected, setSelected] = useState("");
  const grievanceType = useRef("null");
  const grievanceCat = useRef("null");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const academic = [
    "Fee",
    "Library and Lab",
    "Examination",
    "Faculty",
    "Training and Placement",
    "Scholarship",
    "Other",
  ];
  const nonacademic = [
    "Mental Health",
    "Anti-Ragging",
    "Transportation",
    "Club Activities",
    "Lost and Found Items",
    "Parking Issues",
    "Maintenance",
    "Sanitation",
    "Hostel Facilities",
    "Canteen",
    "Sports and NCC",
    "Other",
  ];

  let somevar = null;
  let categoryoptions = null;

  if (selected === "Academic") {
    somevar = academic;
  } else if (selected === "Non Academic") {
    somevar = nonacademic;
  }

  if (somevar) {
    categoryoptions = somevar.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <>
      <div className="admin-button-container ">
        <select
          className="admin-sel-button"
          name="Search by type"
          defaultValue="-"
          ref={grievanceType}
          onChange={changeSelectOptionHandler}
        >
          <option value="-" disabled>
            Search by type
          </option>
          <option className="admin-dropdown-option" value="Academic">
            Academic
          </option>
          <option value="Non Academic">Non Academic</option>
        </select>

        <div className="admin-button1">
          <select
            className="admin-sel-button"
            name="Search by type"
            defaultValue="-"
            ref={grievanceCat}
          >
            <option value="-" disabled>
              Search by category
            </option>
            {/* <option value="Academic">Academic</option>
            <option value="Non Academic">Non Academic</option> */}
            {categoryoptions}
          </select>
        </div>

        <form className="admin-input-button-cont">
          <input
            className="admin-input-button"
            type="text"
            placeholder="Search by id"
          />
          <button className="admin-input-btn-icon">
            <img
              className="admin-btn-icon"
              src="/assets/Button-searchbutton.png"
              alt=""
            ></img>
          </button>
        </form>

        <form className="admin-input-button-cont">
          <input
            className="admin-input-button"
            type="text"
            placeholder="Search by keyword"
          />
          <button className="admin-input-btn-icon">
            <img
              className="admin-btn-icon"
              src="/assets/Button-searchbutton.png"
              alt=""
            ></img>
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminButtons;
