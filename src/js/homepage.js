import React from 'react';
import { Link } from 'react-router';

class Homepage extends React.Component{

  render(){
    return(
      <div id="homepage">
        <section>
          <div id="logo"></div>
          <div id="jobTitle">Front-End Developer</div>
          <div id="contactNav"><Link><i className="fa fa-envelope-o"></i>jaserader@me.com</Link><Link><i className="fa fa-mobile"></i>615-838-5484</Link></div>
          <Link id="enterBtn">Enter</Link>
        </section>
      </div>
    )
  }
}

export default Homepage;
