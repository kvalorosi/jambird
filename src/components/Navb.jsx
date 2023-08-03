
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../components/comp_css/navb.css';
import { useAuth, useSigninCheck, useUser } from 'reactfire';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { Button } from 'react-bootstrap';


const Navb = () => {
  
  
  const auth = useAuth();
  const { data:user } = useUser();
  const { signinStatus } = useSigninCheck();
  const signin =  async () => {
    let provider = new GoogleAuthProvider();
    let u = await signInWithPopup(auth, provider);
    console.log(u);
    return u

  }

  
    return (
        <Navbar style={{ backgroundColor: "#e6f7ff" }} >
          <div className="m-auto">
          <h2>Jambird</h2>
          </div>
        <Container>
        <Navbar.Brand className="home" href="#home"></Navbar.Brand>
          <Nav className="m-right">
          <Link className="navbar-brand" to="/">Home </Link>
            <Link className="navbar-brand" to="/order">Order Here! </Link>
            <Link className="navbar-brand" to='/events'>Events </Link>
            <Link className="navbar-brand" to="/about">About jambird</Link>
            <Link className="navbar-brand" to="/cart">Cart</Link>
            <Button variant="info" onClick={signin}> Log in</Button>
            </Nav>
        </Container>
      </Navbar>
  )
}
export default Navb;



