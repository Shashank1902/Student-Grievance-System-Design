import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
import ContactUs from "../Components/ContactUs/ContactUs";

class Contact extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        {/* <Grievanceform /> */}
        <ContactUs/>
        <Chatbot />
        <Footbar />
      </div>
    );
  }
}

export default Contact;
