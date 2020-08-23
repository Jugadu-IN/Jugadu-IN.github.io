import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import visit from "./visit_2.jpg";
import Logo from './logo.png';

function Showworks(props){
    
    function handle(){
        var event=document.querySelector("a");
        event.style.color="orange";
    }
return <div >
<img
        alt=""
        src={props.image}
        width="356.3"
        height="360.96"
        className="d-inline-block align-top "
      />
      <div class="bottom-left">
     <a class="Heading text-left"  onMouseOver={handle} style={{fontSize:"30px"}} href="#">{props.name}</a>
     <p style={{color:"grey"}}>{props.title}</p>

      </div>
</div>

}
export default Showworks;