import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const Navb = () => {
    return (
        <Navbar style={{ backgroundColor: "#e6f7ff" }} >
        <Container>
        <Navbar.Brand className="home" href="#home"></Navbar.Brand>
          <Nav className="me-auto">
          <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/order">Order Here!</Link>
            <Link className="navbar-brand">Events</Link>
            <Link className="navbar-brand" to="/about">About jam bird</Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
export default Navb;



