import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Aboutpage extends React.Component{

  render(){
    return(
      <div id="aboutpage">
        <header>
          <a href="#"><h1>Jase Rader</h1></a>
        </header>

        <div className="about-container">

          <div className="column">
            <div className="headshot"></div>
          </div>

          <div className="column">
            <p>
              I am a Nashville native who has always enjoyed technology. I have a degree in Logistics  from the University of Tennessee and had been working in I.T. the last two years before I took the leap of going to the Iron Yard for the Front-End Engineering course in the fall of 2015. I am a quick learner when it comes to technology and I am able to learn most things on my own when it comes to a computer, device or software. I left I.T. because there was a creative/design side to me that I was not able to exercise in an I.T. position.
            </p>
            <p>
              Other skills and values I hold besides technical skills and business skills: I am really passionate about people. I firmly believe in respecting others. I also believe the only way to lead other people is through example. I love working in a team environment and I believe that after some experience I will be able to manage a team of people to accomplish projects.
            </p>
          </div>

        </div>
      </div>
    )
  }
}

export default Aboutpage;