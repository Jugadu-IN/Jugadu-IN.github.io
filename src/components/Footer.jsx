import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import footer from "./footer_bg.png";
import Logo from './logo.png';

function Footer(){
    return <div class="body-content">
    <p>
        hdsuiqhdsuiahduiasd
    </p>
    <div class="footer-items">
    <h1>Jugadu.in</h1>
    <p>
        Lorem ipsum iosdnaiodsaoida
    </p>
    </div>
    <div class="footer-items">
        <h2>Quick Links</h2>
        <div class="border">
        <ul>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Services</li></a>
            <a href="#"><li>Our team</li></a>
            <a href="#"><li>Blog</li></a>
            <a href="#"><li>Contact</li></a>
            </ul>
        </div>
        
    </div>
    <div class="footer-items">
        <h2>Services</h2>
        <div class="border">
        <ul>
            <a href="#"><li>Website Development</li> </a>
            <a href="#"><li>App Development</li></a>
            <a href="#"><li>Internet Of Things</li></a>
            <a href="#"><li>SEO</li></a>
            <a href="#"><li>Branding</li></a>
        </ul>
        </div>
        
    </div>
    <div class="footer-items">
        <h2>Contact Us</h2>
        <div class="border">
        <ul>
            <a href="#"><li>Website Development</li> </a>
        </ul>
        </div>
        
    </div>
    <div class="footer-bottom">
    Copyright &copy;Jugadu.in 2020
    </div>
    </div>
}
export default Footer;