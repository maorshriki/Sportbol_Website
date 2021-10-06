import React, { Component } from "react";
import {Form} from "reactstrap";
import "../InsidePages/insidePages_cssFiels/PageThree.css";

class PageThree extends Component{
    constructor() {
        super();
        //this.BMI = this.BMI(this);
        this.h = 0;
        this.w = 0;
        this.bmi = 0;
        this.bmio = 0;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//const PageThree = () => {
async handleSubmit(e) {
        e.preventDefault();
        this.BMI();
    }
render() {
    return (
        <body className="BMI-cal">
        <div className="form-bm">
            <Form onSubmit={this.handleSubmit} style={{ width: "600px" }}>
            <h2>BMI Calculator</h2>
            <p className="text">Height</p>
            <input type="text" id="h"/>
            <p className="text">Weight</p>
            <input type="text" id="w"/>
            <p id="result"></p>
            <button id="btn">Calculate</button>
            <p id="info">Please enter height [cm] and weight [kg]</p>
            </Form>

        </div>
        </body>
    );
    };
    BMI() {
        this.h=document.getElementById('h').value;
        this.w=document.getElementById('w').value;
        this.bmi=this.w/(this.h/100*this.h/100);
        this.bmio=(this.bmi.toFixed(2));

        document.getElementById("result").innerHTML="Your BMI is " + this.bmio;
    }
}

export default PageThree;
