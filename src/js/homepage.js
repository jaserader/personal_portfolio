import React from 'react';
import { Link } from 'react-router';

class Homepage extends React.Component{

  render(){
    return(
      <div id="homepage">
          <div id="logo"></div>
          <div id="jobTitle">Front-End Web Developer</div>
          <div id="contactNav"><Link><i className="fa fa-envelope-o"></i>jaserader@me.com</Link><Link><i className="fa fa-mobile"></i>615-838-5484</Link></div>
          <Link to="main" id="enterBtn">Enter</Link>

            <div className="brief-resume">
              <ul>
                <li>Completed Iron Yard Front-End Engineering Bootcamp.</li>
                <li>Graduated from the University of Tennessee in 2011 with a degree in Business Adminsitration - Logistics.</li>
                <li>Front-End Skills - HTML, CSS, JavaScript, jQuery, SASS, React, Backbone.js, Underscore.js, Bourbon/Neat, Git, GitHub, Command Terminal, Bower, NPM, Gulp, Adobe Illustrator, Adobe Capture</li>
                <li>Hobbies - Wood-Working, Tech Devices, Hiking, Traveling</li>
              </ul>
            </div>
      </div>
    )
  }
}

export default Homepage;
