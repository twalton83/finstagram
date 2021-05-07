import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UserProfile from '../screens/UserProfileScreen';

export default function Router() {
  return (
    <div>
      <Switch>
        <Route path="/user/:id">
          <UserProfile />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/signup">
          <SignUpScreen />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
