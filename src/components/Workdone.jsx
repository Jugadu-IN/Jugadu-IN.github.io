import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Showworks from "./Showworks";
import "./styles.css";
import visit1 from "./visit_1.jpg";
import visit2 from "./visit_2.jpg";
import visit3 from "./visit_3.jpg";
import visit4 from "./visit_4.jpg";


function Workdone(){
    return <div className="">
    <h2 class="Heading text-center" style={{fontSize:"50px"}}>Visit Some of Our <br /> Awesome Stuffs</h2>
    <div className="row pt-5">
    <div class="col-md-3"> <Showworks title="B2B Website Development" name="BulkBazaar" image={visit1} /></div>
    <div class="col-md-3"> <Showworks title="Brand Website Development"name="BluebeeIndia" image={visit2} /></div>
    <div class="col-md-3"> <Showworks  title="Social Media Management"name="Sunshine Clutches" image={visit3}/></div>
    <div class="col-md-3"> <Showworks title="Website Development" name="Concord App" image={visit4} /></div>
</div>

    </div>
}
export default Workdone;