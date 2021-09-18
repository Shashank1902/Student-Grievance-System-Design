import React from 'react';
import './App.css';
import Chatbot from './Components/Chat bot/Chatbot';
import Grievanceform from './Components/GrievanceForm/Grievanceform';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Grievanceform/>
      <Chatbot/>
    </div>
    
  );
  }
}

export default App;
