import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddComment from './components/modals/AddComment';

function App() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
       Root
       <AddComment show={modalShow} onHide={() => setModalShow(false)}/>
       <Button variant="primary" onClick={() => setModalShow(true)}>showModal</Button>
      </header>
    </div>
  );
}

export default App;
