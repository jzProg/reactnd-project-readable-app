import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Root from './components/Root';
import Category from './components/Category';
import PostDetails from './components/PostDetails';
import LoadingBar from 'react-redux-loading';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
     <Router>
      <div className="App">
        <LoadingBar/>
        <header className="App-header">
         <Route exact path="/" component={Root}/>
         <Route exact path='/:category' component={Category}/>
         <Route exact path='/:category/:postId' component={PostDetails}/>
        </header>
      </div>
     </Router>
    );
  }
}

export default App;
