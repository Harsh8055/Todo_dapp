import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./header.css";
const Header = () => {
  return (
    <div>
   
        <Navbar bg="dark" className="centre-x" variant="dark">
          <Container>
            <Navbar.Brand href="#home centre-x justify-content-centre mx-auto red">Todo Dapp Using Etherjs, Reactjs And Solidity : - (Make Sure You Are On Rinkeby Testnetwork Before Connecting Your Wallet) </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"> </Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>
       
   
    </div>
  );
};

export default Header;
