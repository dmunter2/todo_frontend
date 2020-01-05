import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import BeforeLogin from './components/before_login/BeforeLogin'
import UserHome from './components/after_Login/UserHome'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/before_login/Login';
import SignUp from './components/before_login/SignUp';
import Style from 'styled-components'
import beforeLoginMarketing from './components/before_login/beforeLoginMarketing';

const DIV = Style.div`
// width: 90%;
display: flex;
flex-direction: column;
align-items: center;
`



function App() {
  return (
    <DIV>
      <Route path='/(|login|signup)' component={BeforeLogin}/>
      <Route exact path='/' component={beforeLoginMarketing} />

      <Route path='/login' component={Login}/>
      <Route path='/signup' component={SignUp}/>


      <PrivateRoute path='/home' component={UserHome}/>


     {/* <Switch> */}

     {/* </Switch> */}
    </DIV>
  );
}

export default App;
