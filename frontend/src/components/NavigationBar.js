import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavigationBar({ items, onSelect, onHome, onToggle, selected }) {

  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand onClick={() => onHome()}><h3><b>Readable App</b></h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav variant="pills" className="mr-auto" activeKey={selected}>
        { items.map(item => <Nav.Link eventKey={item.name} key={item.name} onClick={() => onSelect(item)}>{item.name}</Nav.Link>)}
      </Nav>
      <Nav>
      <Nav.Link>
       <Button variant="primary" onClick={onToggle}>ADD NEW POST</Button>
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavigationBar;
