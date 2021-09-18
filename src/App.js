import React from 'react';
import './App.css';
import HomeContent from './Components/Home content/Homecontent';
 import Chatbot from './Components/Chat bot/Chatbot';

 class App extends React.Component {
  render() {
  return (
    <div className="App">
   <HomeContent/>
    <Chatbot/>
    </div>
  );
  }
}

export default App;
