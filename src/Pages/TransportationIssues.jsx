import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
// import { Component } from 'react';
import Faq from 'react-faq-component';
import "./categorysection.css"

const data = {
  title: "FAQ",
  rows: [
    {
      title: "1. What type of transport facility is provided to the students for their location?",
      content: "The college provides Bus Facility to students for various routes, information of which is provided on the college website."
    },
    {
      title: "2. How can the Bus Facility be Availed?",
      content: "For availing of bus facilities, students must fill a form providing necessary information to the college to get their bus cards printed. For further details, contact the office reception."
    },
    {
      title: "3. How much is the transport fee for 1st-year students?",
      content: "The Bus fee is ₹12,000 for all the students of the college."
    },
    {
      title: "4. Can the transport fee be deposited in parts?",
      content: "The bus fee can be deposited in two installments for each semester, i.e., of ₹6,000 each."
    },
    {
      title: "5. What will be the mode of payment for the transport fee?",
      content: "The transport fee can only be paid in two modes, i.e., cash and/or cheque."
    },
    {
      title: "6. What document will be issued to the students after depositing transport charges?",
      content: "A bus card, which acts as an identity card would be provided to students which they must carry at all times while traveling on the bus."
    },
    {
      title: "7. Can the transport facility be withdrawn?",
      content: "No, once availed and paid for, the transport facility cannot be withdrawn unless a relevant excuse is provided."
    },
    {
      title: "8. What would be the arrival and departure timings of the bus?",
      content: "The Bus timings are dependent on the college timings and hence, may vary accordingly."
    },
    {
      title: "9. Is it required to renew the bus card from time to time?",
      content: "No, the bus card once issued to the student requires no renewal."
    },
    {
      title: "10. What procedure needs to be followed in case my bus card is lost?",
      content: "In case of losing the bus card, Students must inform the bus authorities and apply for another bus card by following the same procedures as earlier."
    },
    {
      title: "11. . How can I switch my bus in case of a changed address?",
      content: "Students would be required to fill another form in case of a changed address and apply for a new bus card."
    }]
}

const styles = {
  bgColor: 'white',
  titleTextColor: 'black',
  titleTextSize: '40px',
  rowTitleColor: 'black',
  rowTitleTextSize: 'large',
  rowContentColor: 'black',
  rowContentTextSize: '15px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '50px',
  rowContentPaddingRight: '150px',
  arrowColor: "purple",
  transitionDuration: "0.4s",
  timingFunc: "ease",
};

const config = {
  animate: true,
  arrowIcon: <img src="assets\DropDown.png" alt="dropdown" />,

};

class TransportationIssues extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <div>
          <h2 className="category-title">Transportation Issues</h2>
          <p className="category-writeup">
            In this section, you can post queries regarding the transportation facilities provided by the institution.
            For instance, if you want to know about the bus timings, the routes covered or provide feedback  regarding the bus facility, it can be posted here.
            Considering your reported grievance/query, the administration would resolve the matter accordingly.

          </p>
        </div>
        <Grievanceform />
        <Faq data={data}
          styles={styles}
          config={config} />
        <Chatbot />
        <Footbar />
      </div>
    );
  }
}

export default TransportationIssues;