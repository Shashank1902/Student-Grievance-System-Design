import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        {/* <Grievanceform /> */}
        <div className="outside-div">
          <div className="write-up">
            <p>
              The aim behind em  Brace is to develop a support redressal system that could help mainly students and the staff (academic and non-academic) to communicate in a hassle free and direct manner.
              This portal facilitates a system to lodge and redress a complaint made by a student.The grievance made by the student can be categorised based on academic and non-academic sections.Another important category in this product is that, it enables the student to seek for psychological related help and support.
            </p>

          </div>

        </div>
        <Chatbot />
        <Footbar />
      </div>
    );
  }
}

export default AboutUs;