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
      title: "1. What is ragging?",
      content:
        "Any disorderly conduct whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or a junior student, Indulging in a rowdy or undisciplined activities which causes or is likely to cause annoyance, hardship or psychological harm or to raise fear or apprehension thereof in a fresher or a junior student, Asking the students to do any act or perform something which such student will not do in the ordinary course and which has the effect of causing or generating a sense of shame or embarrassment so as to adversely affect the physique or psyche of a fresher or a junior student.",
    },
    {
      title:
        "2. What if some seniors force you to join a group or to do some club activity?",
      content:
        " First of all, nobody is allowed to force someone to join or do any kind of club activity, and if somebody does this to you, then immediately contact your class incharge or department HOD and inform them about this.",
    },
    {
      title:
        "3. What if you want to complain and hide your identity so that you don't get noticed by your seniors?",
      content: `You can report that to your college by using our grievance redressal service. Here you can hide your identity while submitting the grievance by checking the "Submit as Anonymous"
      check box in the grievance reporting form`,
    },
    {
      title: "4. Is there any national helpline for ragging?",
      content: `Yes, UGC has established an Anti-Ragging toll free "helpline" 1800-180-5522 in 12 Languages for helping victims of ragging.
      National Anti-Rogging Helpline<br/>
      Phone No: 1800-180-5522<br/>
      Email- Helpline@Antiragging.In`,
    },
    {
      title: `5. What is "zero tolerance policy" according to UGC?`,
      content: `No act of ragging, major or minor, shall go unnoticed. No ragger, male or female, student
      or non-student, shall go unpunished. No institution that fails to take action against ragging shall
      be allowed to operate.`,
    },
    {
      title: `6. What are punishments accorded by the UGC?`,
      content: `a) Suspension from attending classes and academic privileges.<br/>
      b) Withholding/ withdrawing scholarship/ fellowship and other benefits.`,
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

class AntiRagging extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <div>
          <h2 className="category-title">Anti Ragging</h2>
          <p className="category-writeup">
            Ragging has ruined countless innocent lives and careers.
            <br /> In order to eradicate it, this platform provides you with all
            the support to report your or any such observed incidence in your
            institution.
            <br />
            Taking into account, your grievance, the administration will take
            necessary actions and provide you with the required support
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

export default AntiRagging;
