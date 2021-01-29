import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavContainer from './containers/NavContainer'
import ReviewForm from './containers/ReviewForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={NavContainer} />
          <Route exact path="review/new" component={ReviewForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
