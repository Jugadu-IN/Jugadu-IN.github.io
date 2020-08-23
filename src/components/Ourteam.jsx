import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Team from "./Team";
import Header from "./Header.jsx"; 
import Teamcards from "./Teamcards";
function Ourteam(){
    return <div>
        <Header />
        <div className="text-center" >
            <h2 className="Heading" style={{marginTop:"-150px",fontSize:"50px"}}>Our Team </h2>
        </div>
        <div className="container">
        <div className="row">
        <div className="col-lg-4">
        <Team image={Teamcards[0].image} name={Teamcards[0].name} position={Teamcards[0].Position} location={Teamcards[0].Location} />

        </div>
        <div className="col-lg-4">
        <Team image={Teamcards[1].image}  name={Teamcards[1].name} position={Teamcards[1].Position} location={Teamcards[1].Location} />

        </div>
        <div className="col-lg-4">
        <Team image={Teamcards[2].image} name={Teamcards[2].name} position={Teamcards[2].Position} location={Teamcards[2].Location} />

        </div>
        

        </div>

        <div className="row">
        <div className="col-lg-4">
        <Team image={Teamcards[3].image} name={Teamcards[3].name} position={Teamcards[3].Position} location={Teamcards[3].Location} />

        </div>
        <div className="col-lg-4">
        <Team image={Teamcards[4].image}  name={Teamcards[4].name} position={Teamcards[4].Position} location={Teamcards[4].Location} />

        </div>
        <div className="col-lg-4">
        <Team image={Teamcards[5].image} name={Teamcards[5].name} position={Teamcards[5].Position} location={Teamcards[5].Location} />

        </div>
        

        </div>

        <div className="row">
        <div className="col-lg-4">
        <Team image={Teamcards[6].image} name={Teamcards[6].name} position={Teamcards[6].Position} location={Teamcards[6].Location} />

        </div>
        <div className="col-lg-4">
        <Team image={Teamcards[7].image}  name={Teamcards[7].name} position={Teamcards[7].Position} location={Teamcards[7].Location} />

        </div>
        <div className="col-lg-4">
        <Team image={Teamcards[8].image} name={Teamcards[8].name} position={Teamcards[8].Position} location={Teamcards[8].Location} />

        </div>
        

        </div>


        <div className="row">
        <div className="col-lg-4">
        <Team image={Teamcards[9].image} name={Teamcards[9].name} position={Teamcards[9].Position} location={Teamcards[9].Location} />

        </div>
        <div className="col-lg-4">
        <Team image={Teamcards[10].image}  name={Teamcards[10].name} position={Teamcards[10].Position} location={Teamcards[10].Location} />

        </div>
        

        </div>


        </div>
    </div>
}
export default Ourteam;