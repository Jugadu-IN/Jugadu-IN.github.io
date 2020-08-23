import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";

function WhyUs(){
    return <div class="container">
    <h2 class="text-center pt-5 Heading" style={{fontSize:"50px"}} >Increase your business with <br /> us</h2>
    <div className="row pt-5">
    <div class="col-md-6">
    <ReactBootStrap.Card className="container boxy" style={{width:"100%",height:"175px"}} >
    <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title style={{color: "#2b4b80",fontSize: "20px",fontWeight: "600"}}>For all businesses and Ideas</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text style={{color: "#707b8e",lineHeight:"30px"}} >
    Whether you just have a new business idea or have <br /> an established business, we have something for <br /> everyone.
    </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
    </div>

    <div class="col-md-6">
    <ReactBootStrap.Card  className="container boxy" style={{width:"100%",height:"175px"}} >
    <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title style={{color: "#2b4b80",fontSize: "20px",fontWeight: "600"}}>
Awesome Results</ReactBootStrap.Card.Title>
<ReactBootStrap.Card.Text>
We only rest after all our customers are 100% satisfied <br /> with their product.<br />
100% satisfaction guaranteed.<br /> <br />
    </ReactBootStrap.Card.Text>

    </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
    </div>

    </div>
    <div className="row pt-5">
    <div class="col-md-6">
    <ReactBootStrap.Card className="container boxy" style={{width:"100%",height:"175px"}} >
    <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title style={{color: "#2b4b80",fontSize: "20px",fontWeight: "600"}}>Keep you in the loop</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text style={{color: "#707b8e",lineHeight:"30px"}} >
    We take all your ideas and suggestions into account and we only deliver the best products. <br />
    </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
    </div>

    <div class="col-md-6">
    <ReactBootStrap.Card  className="container boxy" style={{width:"100%",height:"175px"}} >
    <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title style={{color: "#2b4b80",fontSize: "20px",fontWeight: "600"}}>
    Great History</ReactBootStrap.Card.Title>
<ReactBootStrap.Card.Text>
Our products have already helped various businesses and we have many satisfied customers.
    </ReactBootStrap.Card.Text>

    </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
    </div>

    </div>

    </div>

              

}

export default WhyUs;