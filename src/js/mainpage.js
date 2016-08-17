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
          </div>
        </div>
    )
  }
}

export default Mainpage;
