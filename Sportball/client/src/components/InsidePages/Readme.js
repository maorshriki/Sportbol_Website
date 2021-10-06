import { Typography } from "antd";
import "../InsidePages/insidePages_cssFiels/Readme.css";
import guider from "../componentImages/readme_guid_ohad.png";

const { Paragraph, Title } = Typography;

const Readme = () => {
  return (
    <div className="readme">
      <p></p>
      <Title level={4}> Welcome to SportBol</Title>
      <p></p>
      <Title level={4}>to run my store: </Title>
      <p></p>
      <Paragraph ellipsis={{ rows: 10, expandable: true, symbol: "more" }}>

        1. install node<br></br>
        2. from root directory (project) run the command - npm install<br></br>
        3. from client directory (project-final/client) run the command - npm install<br></br>
        4. run - npm run data:import (this will load all the data into the data<br></br>
        base) <br></br>
        5. run - npm run dev (in order to run the app)
        <br></br>
        6. For security reasons, in order to change the admin user, <br></br>
        enter the database and edit the field (role = admin) in the user object,
        <br></br>
        as attached in the following image.<br></br>
        In order to enter the database (mongodb atlas),<br></br>
        enter the following details: Username - maor92272@gmail.com Password -
        Test1234<br></br>
        Attached is a picture of the steps that must be performed after logging
        in:<br></br>
        Maor (top right corner) {"->"} cloud {"->"} Browse Collections {"->"}{" "}
        users {"->"} double click on the role field of the account you
        registered
        <br></br>
        <br></br>
        <Title level={4}>I have attached a picture for illustration :</Title>
        <br></br>
        <img src={guider} width="980px" height="550px"></img>
      </Paragraph>
      <br></br>
      <p></p>
      <p>
        <Title level={4}>Hope you will enjoy</Title>
        <br></br>
      </p>
    </div>
  );
};

export default Readme;
