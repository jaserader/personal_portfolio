import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Contactpage extends React.Component{

  render(){
    return(
      <div id="contactpage">
        <header>
          <a href="#"><h1>Jase Rader</h1></a>
        </header>

        <div className="contact-container">  
          <div>
            <div id="smallLogo"></div>
            <div id="headerNav"><a href="mailto:jaserader@icloud.com"><i className="fa fa-envelope-o"></i>jaserader@me.com</a><a href="tel:615-838-5484"><i className="fa fa-mobile"></i>615-838-5484</a></div>
            <div id="brief">Front-End Developer with a background in Information Technology and Business.</div>
          </div>

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
      </div>

    )
  }
}

export default Contactpage;
