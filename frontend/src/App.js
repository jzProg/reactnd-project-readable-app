import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Root from './components/Root';
import PostDetails from './components/PostDetails';
import LoadingBar from 'react-redux-loading';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Router>
         <LoadingBar/>
         <Route exact path="/:category?" component={Root}/>
         <Route exact path='/:category/:postId' component={PostDetails}/>
       </Router>
     </div>
    );
  }
}

export default App;
