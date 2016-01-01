import React from 'react';
import { Link } from 'react-router';

class Homepage extends React.Component{

  render(){
    return(
      <div id="homepage">
          <div id="logo"></div>
          <div id="jobTitle">Front-End Web Developer</div>
          <div id="contactNav"><Link><i className="fa fa-envelope-o"></i>jaserader@me.com</Link><Link><i className="fa fa-mobile"></i>615-838-5484</Link></div>
          <Link to="main" id="enterBtn">Enter</Link>
      </div>
    )
  }
}

export default Homepage;
