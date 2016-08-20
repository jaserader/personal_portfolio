import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Mainpage extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <div className="background-image w3-animate-bottom"></div>

          <div className="landing-content">
            <div className="name-container">
              <span className="h1">JASE RADER</span>
              <span className="h2">Front End Developer && UI Designer</span>
            </div>

            <div className="nav w3-animate-right">
              <ul>
                <a className="nav-trigger" href="#aboutpage">About</a>
                <a className="nav-trigger" href="#portfoliopage">Portfolio</a>
                <a className="nav-trigger" href="#resumepage">Resumé</a>
                <a className="nav-trigger" href="#contactpage">Contact</a>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Mainpage;
