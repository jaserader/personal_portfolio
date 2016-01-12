import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Homepage from "./homepage";
import Mainpage from "./mainpage";
import Resumepage from "./resumepage";

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
    <Route path="resumepage" component={Resumepage} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
