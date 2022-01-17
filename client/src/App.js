import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import OutPage from './components/OutPage';
import Profile from "./components/Profile";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar isSignedIn={true} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path={"/outpage"}>
              <OutPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
