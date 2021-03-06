import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'




const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" initial />
      <Scene key="home" component={Home} />
      <Scene key="forgotpassowrd" component={ForgotPassword} />
    </Stack>
  </Router>
);


export default RouterComponent;
