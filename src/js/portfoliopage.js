import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Portfoliopage extends React.Component{

  render(){
    return(
      <div id="portfoliopage">
        <div className="background-image"></div>
        <div className="background-filter"></div>

        <header>
          <a href="#"><div className="logo"></div></a>

          <div className="nav">
            <ul id="slideout-nav" className="w3-animate-top">
              <a href="">Home</a>
              <a href="#aboutpage">About</a>
              <a href="#resumepage">Resumé</a>
              <a href="#contactpage">Contact</a>
            </ul>
          </div>
        </header>


        <div className="portfolio-container">
        </div>
      </div>

    )
  }
}

export default Portfoliopage;
