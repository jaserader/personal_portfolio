import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Mainpage extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <header>
            <div id="smallLogo"></div>
            <div id="headerNav"><a href="mailto:jaserader@icloud.com"><i className="fa fa-envelope-o"></i>jaserader@me.com</a><a href="tel:615-838-5484"><i className="fa fa-mobile"></i>615-838-5484</a></div>
            <div id="brief">Front-End Developer with a background in Information Technology and Business.</div>
          </header>

          <div id="heroImg"></div>

          <section id="aboutMe">
            <div id="headShot"></div>
            <div id="info">

              <span id="resumeTitle">Resumé: <span>(download PDF)</span><a href="dist/img/resume.pdf" download="resume.pdf" className="fa fa-download"></a></span>

              <div id="briefResume">
                <ul>
                  <li>Completed Iron Yard Front-End Engineering Bootcamp.</li>
                  <li>Graduated from the University of Tennessee in 2011 with a degree in Business Adminsitration - Logistics.</li>
                  <li>Front-End Skills - HTML, CSS, JavaScript, jQuery, SASS, React, Backbone.js, Underscore.js, Bourbon/Neat, Git, GitHub, Command Terminal, Bower, NPM, Gulp, Adobe Illustrator, Adobe Capture</li>
                  <li>Hobbies - Wood-Working, Tech Devices, Hiking, Traveling</li>
                </ul>
              </div>

            </div>
          </section>

          <section id="socialNav">

            <nav>
              <a href="https://github.com/jaserader"><i className="fa fa-github-square"></i></a>
              <a href="https://www.linkedin.com/in/jaserader"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://www.instagram.com/jase_rader/"><i className="fa fa-instagram"></i></a>
              <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
            </nav>

          </section>

          <section id="portfolio">

            <span id="portfolioTitle">Portfolio</span>

            <section id="sectionOne">
                <div id="innerDiv"></div>


              <div id="siteDescription"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </section>

            <section id="sectionOne">
                <div id="innerDiv"></div>


              <div id="siteDescription"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </section>

            <section id="sectionOne">
                <div id="innerDiv"></div>


              <div id="siteDescription"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </section>

            <section id="sectionOne">
                <div id="innerDiv"></div>


              <div id="siteDescription"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </section>

          </section>

          <footer>
            <nav>
              <a href="https://github.com/jaserader"><i className="fa fa-github-square"></i></a>
              <a href="https://www.linkedin.com/in/jaserader"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://www.instagram.com/jase_rader/"><i className="fa fa-instagram"></i></a>
              <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
            </nav>

            <span id="copyright">© 2016 Jase Rader</span>

            <div id="downloads">
              <a><i className="fa fa-download"></i> Download Resumé</a>
              <a href="mailto:jaserader@icloud.com"><i className="fa fa-envelope-o"></i> Email Me</a>
            </div>
          </footer>
        </div>
    )
  }
}

export default Mainpage;
