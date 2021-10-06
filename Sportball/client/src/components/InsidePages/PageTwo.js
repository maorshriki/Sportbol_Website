import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import "../InsidePages/insidePages_cssFiels/PageTwo.css";

class PageTwo extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    alert("we get your comlaint");
    alert("Your Name :" + name);
    alert("Your Email :" + email);
    alert("The Message is:" + message);

    await axios.post("/api/form", {
      name,
      email,
      message,
    });
  }

  render() {
    return (
      <div className="complaint-form">
        <Form onSubmit={this.handleSubmit} style={{ width: "600px" }}>
          <h3 className="complaint-form-text">
            Please enter your complaint<br></br>
            <br></br>
          </h3>
          <FormGroup>
            <br></br>
            <Label for="name">Name:</Label>
            <Input type="text" name="name" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <br></br>
            <Label for="email">Email:</Label>
            <Input type="email" name="email" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <br></br>
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              name="message"
              onChange={this.handleChange}
            />
          </FormGroup>
          <br></br>
          <Button className="btn-form">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default PageTwo;
