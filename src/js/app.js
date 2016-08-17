import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Homepage from "./homepage";
import Mainpage from "./mainpage";
import Aboutpage from "./aboutpage";
import Resumepage from "./resumepage";
import Contactpage from "./contactpage";

class App extends React.Component {

  render(){
    return(
      <div>
        {this.props.children}
        <div className="nav">
          <ul>
            <a href="">Home</a>
            <a href="#aboutpage">About</a>
            <a href="">Portfolio</a>
            <a href="#resumepage">Resumé</a>
            <a href="#contactpage">Contact</a>
          </ul>
        </div>
      </div>
    )
  }
};

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Mainpage} />
    <Route path="aboutpage" component={Aboutpage} />
    <Route path="resumepage" component={Resumepage} />
    <Route path="contactpage" component={Contactpage} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
