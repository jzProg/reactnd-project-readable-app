import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root';
import Category from './components/Category';
import PostDetails from './components/PostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
   <Router>
    <div className="App">
      <header className="App-header">
       <Root/>
       <Category/>
       <PostDetails/>
      </header>
    </div>
   </Router>
  );
}

export default App;
