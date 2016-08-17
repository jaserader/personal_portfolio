import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Mainpage extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <div id="background-image"></div>

          <div className="landing-content">
            <div className="name-container">
              <h1>Jase Rader</h1>
              <h2>Front End Developer && UI Designer</h2>
            </div>

            <div className="nav">
              <ul>
                <a href="">Portfolio</a>
                <a href="">About</a>
                <a href="">Resumé</a>
                <a href="">Contact</a>
              </ul>
            </div>

            <div className="brief-resume">
              <ul>
                <li>Completed Iron Yard Front-End Engineering Bootcamp.</li>
                <li>Graduated from the University of Tennessee in 2011 with a degree in Business Adminsitration - Logistics.</li>
                <li>Front-End Skills - HTML, CSS, JavaScript, jQuery, SASS, React, Backbone.js, Underscore.js, Bourbon/Neat, Git, GitHub, Command Terminal, Bower, NPM, Gulp, Adobe Illustrator, Adobe Capture</li>
                <li>Hobbies - Wood-Working, Tech Devices, Hiking, Traveling</li>
              </ul>
            </div>

          </div>
        </div>
    )
  }
}

export default Mainpage;
