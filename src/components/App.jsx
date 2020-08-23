import React from "react";
import {Route,Switch} from "react-router-dom";
import Header from "./Header.jsx"; 
import Landing from "./Landing.jsx";
import Business from "./Business";
import Contact from "./Contact";
import WhyUs from "./WhyUs";
import Workdone from "./Workdone"
import Testimonials from "./Testimonials";
import Inmind from "./Inmind";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Ourteam from "./Ourteam.jsx";




function App(){
    return <div>
   <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/aboutus" component={Aboutus} />
       <Route path="/services" component={Services} />
       <Route path="/contact" component={ContactUs} />
       <Route path="/ourteam" component={Ourteam} />
   </Switch>




          {/*  <Header />  
            <Landing />
            <Business />
            <Contact />
            <WhyUs />
            <Workdone />
           <Inmind /> */}
   
           
    </div>
    
}
export default App;