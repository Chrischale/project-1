import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TitleComponent } from './Components/TitleComponent/TitleComponent';
import { NavBarComponent } from './Components/NavBarComponent/NavBarComponent';
import Button from '@material-ui/core/Button'


function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <header className="App-header">
        
        <p>
          Employee Reimbursement System
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Button variant = 'contained' color = 'primary'> Please Login </Button>
      
      </header>
      
    </div>
  );
}

export default App;
