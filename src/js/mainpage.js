import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Mainpage extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <header>
            <Link to="#" id="smallLogo"></Link>
            <div id="headerNav"><a href="mailto:jaserader@icloud.com"><i className="fa fa-envelope-o"></i>jaserader@me.com</a><a href="tel:615-838-5484"><i className="fa fa-mobile"></i>615-838-5484</a></div>
            <div id="brief">Front-End Developer with a background in Information Technology and Business.</div>
          </header>

          <div id="heroImg"></div>

          <section id="aboutMe">
            <div id="headShot"></div>
            <div id="info">

              <div id="resumeTitle">
                <span>Resumé:</span>
                <Link to="/resumepage" id="view">(Click to View)</Link>
                <a href="img/resume.pdf" download="resume.pdf" className="fa fa-download" id="downloadIcon">
                  <div>(download PDF)</div>
                </a>
              </div>

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
              <a href="https://twitter.com/jaser316r"><i className="fa fa-twitter"></i></a>
            </nav>

          </section>

          <section id="portfolio">

            <span id="portfolioTitle">Portfolio</span>

            <section id="sectionOne">
                <a href="http://jaserader.github.io/week10_finalproject_goals/#/?_k=vdlcgy" id="innerDiv"></a>


              <div id="siteDescription"> Goals: This is a simple social media site where a user can create an account and post personal life goals and be supported by other users that have accounts. This site was my final project at the Iron Yard. I worked on a team with another Front-End Developer and a Back-End Developer.</div>
            </section>

            <section id="sectionTwo">
                <a href="http://jaserader.github.io/homework_week06_tuesday/" id="innerDiv"></a>


              <div id="siteDescription"> Address Book: The purpose of this project was to use Backbone.js to communicate with an API hosted on Heroku. We were given creative freedom when styling this project.</div>
            </section>

            <section id="sectionThree">
                <a href="https://github.com/jaserader/homework_week04_tuesday" id="innerDiv"></a>


              <div id="siteDescription"> GitHub Repo: This is a project I did four weeks into The Iron Yard. We were told to make a pixel perfect replica of our personal GitHub repo list page. We had to use jQuery to make the project functional.</div>
            </section>

            <section id="sectionFour">
                <a href="http://jaserader.github.io/homework_week02_thursday/" id="innerDiv"></a>


              <div id="siteDescription"> Project Skate: For this project we were given a Wire Frame and assigned to make this homepage pixel perfect using Bourbon and Neat's grid.</div>
            </section>

          </section>

          <footer>
            <nav>
              <a href="https://github.com/jaserader"><i className="fa fa-github-square"></i></a>
              <a href="https://www.linkedin.com/in/jaserader"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://www.instagram.com/jase_rader/"><i className="fa fa-instagram"></i></a>
              <a href="https://twitter.com/jaser316"><i className="fa fa-twitter"></i></a>
            </nav>

            <span id="copyright">© 2016 Jase Rader</span>

            <div id="downloads">
              <a href="img/resume.pdf" download="resume.pdf"><i className="fa fa-download"></i> Download Resumé</a>
              <a href="mailto:jaserader@icloud.com"><i className="fa fa-envelope-o"></i> Email Me</a>
            </div>
          </footer>
        </div>
    )
  }
}

export default Mainpage;
