import React from "react";
import "./AdminButtons.css";

function AdminButtons() {
  return (
    <>
      <div className="admin-button-container ">
        <select
          className="admin-sel-button"
          name="Search by type"
          defaultValue="-"
        >
          <option value="-" disabled>
            Search by type
          </option>
          <option  className="admin-dropdown-option" value="Academic">Academic</option>
          <option value="Non Academic">Non Academic</option>
        </select>

        <div className="admin-button1">
          <select
            className="admin-sel-button"
            name="Search by type"
            defaultValue="-"
          >
            <option value="-" disabled>
              Search by category
            </option>
            <option value="Academic">Academic</option>
            <option value="Non Academic">Non Academic</option>
          </select>
        </div>

        <form className="admin-input-button-cont">
          <input className="admin-input-button" type="text" placeholder="Search by id" />
          <button className="admin-input-btn-icon">
            <img
              className="admin-btn-icon"
              src="/assets/Button-searchbutton.png"
              alt=""
            ></img>
          </button>
        </form>

        <form className="admin-input-button-cont">
          <input className="admin-input-button" type="text" placeholder="Search by keyword" />
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
