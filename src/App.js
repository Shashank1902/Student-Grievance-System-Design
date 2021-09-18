import React from 'react';
import './App.css';
import Categorysection from './Components/CategorySection/Categorysection';
import Chatbot from './Components/Chat bot/Chatbot';

class App extends React.Component {
  render() {
  return (
    <div className="App">
    
    <Chatbot/>
    <Categorysection />
    </div>
  );
  }
}

export default App;
