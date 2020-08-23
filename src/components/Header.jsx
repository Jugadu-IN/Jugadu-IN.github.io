import React from "react";
import Logo from './logo.png';
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";


var on= false;

function Header(){ 
  function handler(){
    var button=document.querySelector("button");
    if(on===false){
    button.style.background="#C77B00";
    on=true;
  }
  else{
    button.style.background="#4043bc";
    on=false;
  }
}
const Aboutus = () => <h1>About</h1>;
    return <div className="container">  <header>
  <ReactBootStrap.Navbar style={{backgroundColor:"white"}} variant="light">
  <div className="container">
    <ReactBootStrap.Navbar.Brand href="#home">
      <img
        alt=""
        src={Logo}
        width="60"
        height="60"
        className="d-inline-block align-top "
      />
     <span className="text"></span> 
    </ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="ml-auto text ">
      <ReactBootStrap.Nav.Link to="/"  className="width"  style={{color:"#002e5b"}} href="/">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link to="/aboutus" className="width" style={{color:"#002e5b"}} href="aboutus">About Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link to="/services" className="width"  style={{color:"#002e5b"}} href="services">Services</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link to="/contact"  className="width" style={{color:"#002e5b"}} href="contact">Contact</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link to="/ourteam"  className="width"  style={{color:"#002e5b"}}href="ourteam">Our Team</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Button onMouseOver={handler} onMouseLeave={handler} className="Button" variant="primary" style={{backgroundColor:"#4043bc",transition:"0.5s"}}>Contact Us </ReactBootStrap.Button>{' '}
    </ReactBootStrap.Nav>
    </div>
  </ReactBootStrap.Navbar>
   
    </header>
    </div>
}   
export default Header;