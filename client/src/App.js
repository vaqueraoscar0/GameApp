import './index.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Login from './components/Login';
import Games from './components/Games';
import ShowGame from './components/ShowGame';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Chat from "./components/Chat";

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
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/games/:id">
              <ShowGame />
            </Route>
            <ProtectedRoute exact path={"/profile"} component={Profile}/>
            <ProtectedRoute exact path={"/chat"} component={Chat}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;