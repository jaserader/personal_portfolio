import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Mainpage extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <header>
            <div id="smallLogo"></div>
            <div id="headerNav"><Link><i className="fa fa-envelope-o"></i>jaserader@me.com</Link><Link><i className="fa fa-mobile"></i>615-838-5484</Link></div>
            <div id="brief">Jase is a Front-End Developer with a background in Information Technology and Business.</div>
          </header>

          <div id="heroImg"></div>

          <section id="aboutMe">
            <div id="headShot"></div>
            <div id="info">

              <span id="resumeTitle">Resumé: <span>(download PDF)</span><i className="fa fa-download"></i></span>

              <div id="briefResume">
                <ul>
                  <li>Completed Iron Yard Front-End Engineering Bootcamp.</li>
                  <li>Graduated from the University of Tennessee in 2011 with a degree in Business Adminsitration - Logistics.</li>
                  <li>Front-End Skills - HTML, CSS, JavaScript, jQuery (or $), SASS, React, Backbone.js, GitHub, Adobe Illustrator, Adobe Capture</li>
                  <li>Hobbies - Wood-Working, Tech Devices, Hiking, Traveling</li>
                </ul>
              </div>

            </div>
          </section>

          <section id="socialNav">

            <nav>
              <Link to=""><i className="fa fa-github-square"></i></Link>
              <Link to=""><i className="fa fa-linkedin-square"></i></Link>
              <Link to=""><i className="fa fa-instagram"></i></Link>
              <Link to=""><i className="fa fa-twitter"></i></Link>
            </nav>

          </section>

          <section id="portfolio">

            <span id="portfolioTitle">Portfolio</span>

            <section id="sectionOne">
              <div id="outerDiv">
                <div id="innerDiv"></div>
              </div>

              <div id="siteDescription"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </section>

            <section id="sectionOne">
              <div id="outerDiv">
                <div id="innerDiv"></div>
              </div>

              <div id="siteDescription"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </section>

            <section id="sectionOne">
              <div id="outerDiv">
                <div id="innerDiv"></div>
              </div>

              <div id="siteDescription"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </section>

            <section id="sectionOne">
              <div id="outerDiv">
                <div id="innerDiv"></div>
              </div>

              <div id="siteDescription"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </section>

          </section>

          <footer>
            <nav>
              <Link to=""><i className="fa fa-github-square"></i></Link>
              <Link to=""><i className="fa fa-linkedin-square"></i></Link>
              <Link to=""><i className="fa fa-instagram"></i></Link>
              <Link to=""><i className="fa fa-twitter"></i></Link>
            </nav>

            <div id="downloads">
              <Link><i className="fa fa-download"></i> Download Resumé</Link>
              <Link><i className="fa fa-envelope-o"></i> Email Me</Link>
            </div>
          </footer>
        </div>
    )
  }
}

export default Mainpage;
