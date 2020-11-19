import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../image-icon/logo.png'
import './navbar.css'
const NavBar = () => {
    return (
        
        <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home">
            <img src={logo} alt="" width="150px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="navlink" variant=""  defaultActiveKey="home">
            <Nav.Link href="#home" eventKey='home'>Home</Nav.Link>
            <Nav.Link href="#link" eventKey='portfolio'>About</Nav.Link>
            <Nav.Link href="#link" eventKey='team'>Services</Nav.Link>
            <Nav.Link href="#link" eventKey='contact'>Pricing</Nav.Link>      
            <Nav.Link href="#link" eventKey='contact'>Our Team</Nav.Link>      
            

            
          </Nav>
           
           <Button id="btnstyle" className="nabButton" style={{marginLeft:"20px"}}>Contact Us</Button>
            
        </Navbar.Collapse>
      </Navbar>
      
    );
};

export default NavBar;