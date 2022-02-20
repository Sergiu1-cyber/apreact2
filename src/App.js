import React from 'react'
import logo from './logo.svg';
import './App.css';
import Comp2 from './components/Comp2.js'
import Comp3 from './components/Comp3.js'
import MyButton from './ui/button/MyButton.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comp2 draggable={true} />
        <Comp3 />
        <MyButton>Click</MyButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
