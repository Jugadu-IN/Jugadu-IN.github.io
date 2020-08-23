import React from "react";
import laptopimg from "./we-create.png";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";

function Contact(){ 

return <div style={{paddingTop:"240px"}} class="container"> 
<div class="row">
<div class="col-lg-6">
<img src={laptopimg} />
</div>
<div class="col-lg-6 col-md-12">
                        <div >
                            <h3 className="we-create-cap">We help you in taking your business to new heights.</h3>
                            <p style={{color:"#707B8E",margin:"0px 0px 56px"}}>We offer a wide variety of low cost and efficient digital solutions. Our top priority is customer satisfaction. We are
                            trying to provide out customers with a wide range of tools and services to skyrocket their businesses. Ranging from
                            Website Development to making sure you reach that top google search using our dedicated SEO team. To targeting the ever
                            rising mobile application market, and deploying secure cloud solutions. We aim to provide it all. For any queries or
                            price confirmations reach out to us thorugh our Contact section.</p>
                            
                        </div>
                        <div >
                        <ReactBootStrap.Button style={{padding:"30px 46px 30px 46px",lineHeight:"0",color:"white",backgroundColor:"#4043bc",transition:"0.5s"}} variant="warning">Contact Us</ReactBootStrap.Button>{' '}
                        </div>
                    </div>

</div>

</div>

}
export default Contact;