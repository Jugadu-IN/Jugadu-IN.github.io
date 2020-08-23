import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Header from "./Header.jsx"; 
import Landing from "./Landing.jsx";
import Business from "./Business";
import Contact from "./Contact";
import WhyUs from "./WhyUs";
import Workdone from "./Workdone"
import Testimonials from "./Testimonials";
import Inmind from "./Inmind";
import Aboutus from "./Aboutus";
import Footer from "./Footer";


function Home(){
    return <div>
<Header />
<Landing />
<Business />
<Contact />
<WhyUs />
<Workdone />
<Inmind />



</div>
}
export default Home;