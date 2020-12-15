import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
   <Router>
    <div className="App">
      <header className="App-header">
       <Root/>
      </header>
    </div>
   </Router>
  );
}

export default App;