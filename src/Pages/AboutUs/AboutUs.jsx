import React from "react";
import Chatbot from "../../Components/Chat bot/Chatbot";
import Footbar from "../../Components/Footbar/Footbar";
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
import "./aboutus.css";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <div className="outside-div">
          <div className="write-up">
            <h1 className="about-title">About Us</h1>
            <p className="about-content">
              Dear Students,<br />
              While the institution strives to establish an environment for you all to be able to
              pursue your path of education without any difficulties, we are mindful of the fact, that
              sometimes due to the sheer magnitude
              of operations or even lack of information, you do occasionally face problems.<br/>
              Thus, to facilitate, a base for communication,<br/> &lt;em&gt;brace, a platform to brace all your, academic and
              non-academic queries. <br/>Our objective is to redress all your queries and provide each student with a support system.

             
            </p>
            {/* <p className="about-content" id="second-para">
            The grievance made by the student can be categorised based on academic and <br/> non-academic sections.Another important category in this product is that, it enables the student to seek for psychological related help and support.
            </p> */}

          </div>

        </div>
        <Chatbot />
        <Footbar />
      </div>
    );
  }
}

export default AboutUs;