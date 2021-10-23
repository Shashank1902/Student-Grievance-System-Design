import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
import Faq from "react-faq-component";
import "./categorysection.css";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "1. What are the different modes of fee payment?",
      content: "Fees can be paid through cash, cheque, DD,RTGS, NEFT and UPI.",
    },
    {
      title: "2. What should be done in case of lost fee receipt?",
      content:
        "In such a case, consult the class incharge or directly make an amendment at the fees counter to get a duplicate receipt.",
    },
    {
      title: "3. Is there a procedure to avail fee concession?",
      content:
        "For availing any kind of rebeit one can apply for a scholarship, if they fall in requirements stated in the scholarship policies.",
    },
    {
      title:
        "4. How can one reimburse miscellaneous(security) fees at the end of graduation?",
      content:
        "By simply showing the receipt of the miscellaneous or security fee one can avail it.",
    },
    {
      title: "5. What are the working hours of the fee section?",
      content:
        "Monday to Saturday, from morning 11 am to 4pm. (1pm to 2pm lunch hours)",
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  titleTextSize: "40px",
  rowTitleColor: "black",
  rowTitleTextSize: "large",
  rowContentColor: "black",
  rowContentTextSize: "15px",
  rowContentPaddingTop: "10px",
  rowContentPaddingBottom: "10px",
  rowContentPaddingLeft: "50px",
  rowContentPaddingRight: "150px",
  arrowColor: "purple",
  transitionDuration: "0.4s",
  timingFunc: "ease",
};

const config = {
  animate: true,
  arrowIcon: <img src="assets\DropDown.png" alt="dropdown" />,
};

class FeeRelatedIssues extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <div>
          <h2 className="category-title">Fee Related Issues</h2>
          <p className="category-writeup">
            In this section, you can post your fee related queries. For
            instance, if you want to know your recent transactions with the
            college, inquire about the college fee structure, the due amount or
            any other. Considering your query, it will be resolved accordingly
            and appropriate steps shall be taken.
          </p>
        </div>
        <Grievanceform />
        <div className="category-faq">
          <Faq 
          data={data} 
          styles={styles} 
          config={config} />
        </div>
        <Chatbot />
        <Footbar />
      </div>
    );
  }
}

export default FeeRelatedIssues;
