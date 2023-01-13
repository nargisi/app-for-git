import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import InitialState from './components/InitialState/InitialState';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/">
          <InitialState />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
