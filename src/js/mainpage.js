import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Mainpage extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <div className="landing-content">
            <div className="name-container">
              <h1>Jase Rader</h1>
              <h2>Front End Developer && UI Designer</h2>
            </div>

            <div className="nav">
              <ul>
                <a href="">Home</a>
                <a href="#aboutpage">About</a>
                <a href="#portfoliopage">Portfolio</a>
                <a href="#resumepage">Resumé</a>
                <a href="#contactpage">Contact</a>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Mainpage;
