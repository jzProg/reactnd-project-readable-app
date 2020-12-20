import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar({ items, onSelect, onHome }) {

  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand onClick={() => onHome()}><b>Readable App</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        { items.map(item => <Nav.Link key={item.name} onClick={() => onSelect(item)}>{item.name}</Nav.Link>)}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavigationBar;
