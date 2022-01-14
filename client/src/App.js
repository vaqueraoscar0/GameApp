import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import OutPage from './components/OutPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
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
