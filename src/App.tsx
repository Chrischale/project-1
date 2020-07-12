import React, { useState } from 'react';
import './App.css';
import { NavBarComponent } from './Components/NavBarComponent/NavBarComponent';
//import Button from '@material-ui/core/Button'
import { LoginComponent } from './Components/LoginComponent/LoginComponent';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { TitleComponent } from './Components/TitleComponent/TitleComponent';
import { User } from './Models/Users';
import { ProfileComponent } from './Components/ProfileComponent/ProfileComponent';
import { UserDisplayComponent } from './Components/UserDisplayComponent/UserDisplayComponent';
import { AllUsersComponent } from './Components/AllUsersComponent/AllUsersComponent';
import { Provider } from 'react-redux';
import { store } from './store';
import { Button } from '@material-ui/core';


function App() {
  const [currUser, changeCurrUser] = useState<null|User> (null)

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <NavBarComponent user = {currUser}/>
        <Route path = '/home' render = {(props) => (
        <header className="App-header">
          
          <TitleComponent title='Employee Reimbursement System' size = 'large' />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          Please Login to Continue
          <br/>
          <Button variant="contained" color="primary">Login</Button>
        
        </header>
        )}>
        </Route>
        <Route path = '/login' render = {(props)=>(<LoginComponent changeCurrUser={changeCurrUser} {...props}/>)}></Route>
        <Route path = '/profile/:userId' component={ProfileComponent}></Route>
        <Route path ='/users' component={AllUsersComponent}/>
        

      </Router>
      </Provider>
      </div>
  );
}

export default App;
