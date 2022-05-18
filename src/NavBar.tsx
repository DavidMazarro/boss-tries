import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  ShowBossFormContext,
  ToggleBossFormContext,
} from "./Context/BossFormContext";

const NavBar: React.FC = () => {
  const toggleBossFormContext = useContext(ToggleBossFormContext);
  const showBossFormContext = useContext(ShowBossFormContext);

  console.log(`NavBar: showBossFormContext = ${showBossFormContext}`);

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Boss Tries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={toggleBossFormContext} href="/add">
              Add boss
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;