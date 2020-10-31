import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Teamcards from "./Teamcards";

function Team(props){
    return <div className="container pt-4 m-1">
    <img style={{ borderRadius: "60%" }} src={props.image} width="240px" height="240px" />
    <div className="container text-center">
   <a> <h3 className="pr-5" style={{color:"#828bb2",fontWeight:"bold"}}>{props.name}</h3> </a>
   <p className="pr-5" style={{color:"#707B8E",fontSize:"19px"}}>{props.position}</p>
   <p className="pr-5" style={{color:"#707B8E",fontSize:"16px",marginTop:"-12px"}}>{props.location}</p>

</div>
    </div>
}
export default Team;
