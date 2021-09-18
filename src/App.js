import React from 'react';
import './App.css';
<<<<<<< HEAD
import Chatbot from './Components/Chat bot/Chatbot';
import Grievanceform from './Components/GrievanceForm/Grievanceform';
=======
import HomeContent from './Components/Home content/Homecontent';
 import Chatbot from './Components/Chat bot/Chatbot';
import Categorysection from './Components/CategorySection/Categorysection';
>>>>>>> aa690e124438b982be337f261fbb935a0dc0146c

 class App extends React.Component {
  render() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Grievanceform/>
      <Chatbot/>
=======
   <HomeContent/>
    
    <Chatbot/>
    <Categorysection />
>>>>>>> aa690e124438b982be337f261fbb935a0dc0146c
    </div>
    
  );
  }
}

export default App;
