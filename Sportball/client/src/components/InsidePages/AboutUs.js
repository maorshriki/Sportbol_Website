import React from "react";
import "../InsidePages/insidePages_cssFiels/AboutUs.css";
import Maor from "../InsidePages/sportImages/MaorShriki.jpg";
import Yael from "../InsidePages/sportImages/YaelLivni.png";

const AboutUs = () => {
  return (
    <div className="about">
      <section id="vision">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 mb-4">
              <h4 className="text-center mt-4 text-secondary text-white">
                My Vision
              </h4>
            </div>
            <h4 className="font-weight-bold text-white mt-4">
              {/* {JSON.stringify(
                JSON.parse(localStorage.getItem("user")["username"])
              )} */}
              Sport and healthy life style is not a passing trend.
              <br />
              In order to make the sports hobby a little more professional
              <br />
              we wanted to allow access to the best sports fields for the
              <br />
              whole public and to make it easier to book a field.
              <br />
              <br></br>
              <br></br>
            </h4>
          </div>
        </div>
      </section>

      <section className="bg-light mt-5" id="team">
        <div className="container">
          <div className="row text-center ">
            <div className="col-sm-12 col-md-12 mb-4">
              <h4 className="text-center mt-4 text-secondary text-black">
                About me<br></br>
              </h4>
            </div>
            <div>
              <div className="testimonial mb-5">
                <div className="avatar ">
                  <img src={Maor} className="z-depth-1 img-fluid" alt="" />
                </div>
                <p className="font-weight-normal text-black">
                <br></br>
                  Hello my name is Maor and i'm a second year computer science 
                  student.<br></br>I am from Jerusalem and as a sports fan I like to
                  play with my friends and finding a vacant sports field was
                  almost impossible for us.<br></br> That's where the idea to create the
                  sportbol came from.
                </p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="avatar"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
