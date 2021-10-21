import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
import Faq from 'react-faq-component';
import "./categorysection.css"

const data = {
  title: "FAQ",
  rows: [
    {
      title: "1. How many books will be issued for 5th sem students?",
      content: "Total 4 books will be issued."
    },
    {
      title: "2. . Will the library function tomorrow on 2nd October 2021, if yes then what will be the timings?",
      content: "Yes, Timings will be 11am to 05pm."
    },
    {
      title: "3. Can I access the library on 15th OCT, at the noon time? ",
      content: "Yes, the library will be functional."
    },
    {
      title: "4.Where is the library situated in out institution?",
      content: "It is situated near the main entrance gate."
    },
    {
      title: "5. After issuing, when the books need to be reissued or returned?",
      content: "After issuing the book needs to be reissued within 15 days and need to be returned within 6 months from the date of first issue."
    },
    {
      title: "6. Where is the chemistry lab situated?",
      content: "It is situated near the library, on 1st floor."
    }, {
      title: "7. Who is the lab attendant of BME lab?",
      content: "Mr Venkatesh Anand is the lab attendant of BME lab."
    }, {
      title: "8. How many students can be accommodated in the CL7 lab at once?",
      content: "Maximum 45 students can access the lab at once."
    }, {
      title: "9. How many labs are there in our Institution?",
      content: "5 computer labs, 1 lab for physics, chemistry, civil, Electronics, BME overall 11 labs are there."
    }, {
      title: "10. What are the precautions need to be followed while accessing the labs?",
      content: `a) Proper use of instruments of the lab.<br/>
      b) Safety precautions like gloves, eyeglasses in the lab of chemistry, workshops.<br/>
      c) Maintaining the same state of the lab items/computers as it were after accessing.`
    },]
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

class LibandLabIssues extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <div>
          <h2 className="category-title">Library and Lab Issues</h2>
          <p className="category-writeup">
            In this section, you can post enquires regarding the institution’s library and labs.
            For instance, library related enquiries could include, issue of a new library card, library timings, exchange or return of any book or any other related queries.
            For lab, you can post to enquire about lab timings, lab functionality rules and norms laid down by the institution.
            The solutions to your query shall be reverted.

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

export default LibandLabIssues;