import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavContainer from './containers/NavContainer'
import Title from './components/Title'
import SearchResultsContainer from './containers/SearchResultsContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <NavContainer />
        <Switch>
          <Route exact path="/" component={SearchResultsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
