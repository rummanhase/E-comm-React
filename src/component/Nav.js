import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/"> Products</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="AddProducts">AddProducts</Nav.Link>
            <Nav.Link href="UpdateProducts">UpdateProducts</Nav.Link>
            <Nav.Link href="Logout">Logout</Nav.Link>
            <Nav.Link href="Profile">Profile</Nav.Link>
            <Nav.Link href="SignUp">SignUp</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;