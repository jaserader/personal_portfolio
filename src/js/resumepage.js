import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Resumepage extends React.Component{

  render(){
    return(
      <div id="resumepage">
        <div className="background-image"></div>
        <div className="background-filter"></div>

        <header>
          <a href="#"><div className="logo"></div></a>

          <div className="nav">
            <ul id="slideout-nav" className="w3-animate-top">
              <a href="">Home</a>
              <a href="#aboutpage">About</a>
              <a href="#portfoliopage">Portfolio</a>
              <a href="#resumepage">Resumé</a>
              <a href="#contactpage">Contact</a>
            </ul>
          </div>
        </header>


        <div className="resume-container">

          <div className="resume">
            <p id="skills">
              SKILLS:	HTML, CSS, SASS, Sketch, JavaScript, jQuery, Knockout.js, PHP, Bourbon/Neat, React, Backbone.js, Git, GitHub, Command Terminal, Bower, NPM, Gulp, Adobe Illustrator, Adobe Capture
            </p>
            <hr></hr>
              <div className="resume-block">
                <span className="resume-title">GameWisp, Inc.</span><span className="resume-title">Nashville, TN</span>
                <p>February 2016 - August 2016</p>
                <ul>
                  <li>Redesigned entire site for September 2016 Launch of a new GameWisp Site</li>
                  <li>Established Design and Front End techniques to make site more user friendly and readable</li>
                  <li>Created Wire Frames with Sketch to create and communicate new designs and work flow</li>
                  <li>Worked in Dev environment daily to help build the new and redesigned pages and components</li>
                </ul>
              </div>
            <hr></hr>
              <div className="resume-block">
                <span className="resume-title">Branstetter, Stranch and Jennings, PLLC</span><span className="resume-title">Nashville, TN</span>
                <p>August 2013 - October 2015</p>
                <ul>
                  <li>Provided attorneys and staff with hardware and software technical support</li>
                  <li>Assisted office manager with billing and operational duties</li>
                </ul>
              </div>
            <hr></hr>
              <div className="resume-block">
                <span className="resume-title">21st Mortgage Corporation</span><span className="resume-title">Knoxville, TN</span>
                <p>May 2012 - July 2013</p>
                <ul>
                  <li>Managed delinquent accounts and provided financial services for a diverse customer base</li>
                  <li>Analyzed accounts to allocate financial solutions for customers</li>
                </ul>
              </div>
            <hr></hr>
              <div className="resume-block">
                <span className="resume-title">Apple Store</span><span className="resume-title">Knoxville, TN</span>
                <p>January - August 2010</p>
                <ul>
                  <li>Focused on sales and providing customer satisfaction</li>
                  <li>Developed extensive knowledge of all products and services</li>
                </ul>
              </div>
          </div>

          <footer>
            <a href="img/resume.pdf" download="resume.pdf"><i className="fa fa-download"></i> Download Resumé</a>
          </footer>
        </div>
      </div>

    )
  }
}

export default Resumepage;
