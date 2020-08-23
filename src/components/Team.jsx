import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Teamcards from "./Teamcards";

function Team(props){
    return <div className="container pt-5">
    <img style={{ borderRadius: "50%" }} src={props.image} width="255px" height="256px" />
    <div className="container text-center">
   <a> <h2 className="pr-5" style={{color:"#828bb2",fontWeight:"bold"}}>{props.name}</h2> </a>
   <p className="pr-5" style={{color:"#707B8E",fontSize:"19.2px"}}>{props.position}</p>
   <p className="pr-5" style={{color:"#707B8E",fontSize:"16px",marginTop:"-10px"}}>{props.location}</p>

</div>
    </div>
}
export default Team;