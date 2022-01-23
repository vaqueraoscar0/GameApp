import './index.css';
import React from 'react';
import Home from './components/HomePage/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Registration from './components/Forms/Registration';
import Login from './components/Forms/Login';
import Games from './components/Games/Games';
import ShowGame from './components/Games/ShowGame';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Chat from "./components/Chat/Chat";
import Forum from "./components/Forum/Forum";
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import Post from "./components/Forum/Post";

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
            <Route exact path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/games/:id">
              <ShowGame />
            </Route>
            <ProtectedRoute exact path={"/profile"} component={Profile}/>
            <ProtectedRoute exact path={"/chat"} component={Chat}/>
            <ProtectedRoute exact path={"/forum/:id"} component={Forum}/>
            <ProtectedRoute exact path={"/newpost/:id"} component={Post}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;