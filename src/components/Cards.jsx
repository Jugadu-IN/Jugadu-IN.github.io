import React from "react";
import seo from "./seo.svg";
import next from "./next.svg";
import app from "./app.svg";
import * as ReactBootStrap from "react-bootstrap";
function Cards(props){
    return <ReactBootStrap.Card style={{ width: '20rem',height:"400px",border:"0" }} >
    <ReactBootStrap.Card.Img className="container" style={{width:"100px",height:"100px"}} variant="top" src={props.img} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title> <h4 style={{color: "#2b4b80"}}>{props.title} </h4></ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        {props.description}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <a style={{color:"#7b40c0"}} href="#"><img src={next} style={{height:"20px",textDecoration:"none"}} />   Get Started</a>
  </ReactBootStrap.Card>
}
export default Cards;