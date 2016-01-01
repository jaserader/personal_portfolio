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
          </header>

          <div id="heroImg"></div>

          <section id="aboutMe">
            <div id="headShot"></div>
            <div id="info">
              <div>Jase is a Front-End Developer with a background in Information Technology and Buisness.</div>

              <span id="resumeTitle">Resumé: <i className="fa fa-download"></i></span>

              <div id="briefResume">
                <ul>
                  <li>Completed Iron Yard Front-End Engineering Bootcamp.</li>
                  <li>Graduated from the University of Tennessee in 2011 with a degree in Business Adminsitration - Logistics.</li>
                  <li></li>
                </ul>
              </div>

            </div>
          </section>
        </div>
    )
  }
}

export default Mainpage;
