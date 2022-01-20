import './index.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login';
import Games from './components/Games';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import OutPage from "./components/OutPage";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <ProtectedRoute exact path={"/profile"} component={Profile}/>
            <ProtectedRoute exact path={"/OutPage"} component={OutPage}/>
            <ProtectedRoute exact path={"/ChatRoom"} component={ChatRoom}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;