import React from 'react';
import './App.css';
import HomeContent from './Components/Home content/Homecontent';
 import Chatbot from './Components/Chat bot/Chatbot';
import Categorysection from './Components/CategorySection/Categorysection';

 class App extends React.Component {
  render() {
  return (
    <div className="App">
   <HomeContent/>
    
    <Chatbot/>
    <Categorysection />
    </div>
  );
  }
}

export default App;
