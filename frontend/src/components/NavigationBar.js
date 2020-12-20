import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar({ items, onSelect }) {

  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand><b>Readable App</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        { items.map(item => <Nav.Link onClick={() => onSelect(item)}>{item.name}</Nav.Link>)}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavigationBar;
