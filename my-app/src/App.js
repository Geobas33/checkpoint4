import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import FormCasting from './Components/FormCasting'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path="/" component={HomePage} />
       <Route path="/formcasting/" component={FormCasting} />
      </Switch>
    </div>
  );
}

export default App;
