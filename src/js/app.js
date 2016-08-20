import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Homepage from "./homepage";
import Mainpage from "./mainpage";
import Aboutpage from "./aboutpage";
import Portfoliopage from "./portfoliopage";
import Resumepage from "./resumepage";
import Contactpage from "./contactpage";

class App extends React.Component {

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
};

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Mainpage} />
    <Route path="aboutpage" component={Aboutpage} />
    <Route path="portfoliopage" component={Portfoliopage} />
    <Route path="resumepage" component={Resumepage} />
    <Route path="contactpage" component={Contactpage} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
