import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
import Faq from 'react-faq-component';

const data = {
  title: "FAQ",
  rows: [
    {
      title: "1. What should I do if I have lost a piece of property?",
      content: `If you lost property on the  Campus, please contect your class incharge to check if it has been turned in.<br/>
      If you believe you lost an item in a library or a building with a front desk, we encourage you to go to that front desk and see if it has been turned in.<br/>
      All items turned into Campus Safety as "lost property" will be kept for 90 days.  After that time items are donated to various charities or destroyed.  
      `
    },
    {
      title: "2. How do I acquire my lost item?",
      content: "Come to our Exam cell office and describe your lost item as best you can and the time that you lost it. We will search through our inventory and inform you if we have your lost item. You’re required to show a picture ID and sign the item out."
    },
    {
      title: "3. When do you usually receive lost items?",
      content: "We usually receive the previous’ days lost items on campus before 9 a.m. each morning."
    },
    {
      title: "4. I lost my ID. What should I do?",
      content: "You should immediately report the loss of a card so that it can be deactivated to prevent any unauthorized use of the card. this can be done by going to the Campus Card office."
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

class LostandFound extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
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

export default LostandFound;