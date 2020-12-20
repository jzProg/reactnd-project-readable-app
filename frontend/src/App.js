import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInitialData } from './actions/shared';
import Root from './components/Root';
import PostDetails from './components/PostDetails';
import LoadingBar from 'react-redux-loading';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    load: false,
  }

  componentDidMount() {
    this.props.dispatch(fetchInitialData()).then(() => {
      this.setState({ load: true });
    });
  }

  render() {
    return (
      <div className="App">
       <LoadingBar/>
       { this.state.load && (
         <Router>
           <Route exact path="/:category?" component={Root}/>
           <Route exact path='/:category/:postId' component={PostDetails}/>
         </Router>
        ) }
     </div>
    );
  }
}

export default connect()(App);
