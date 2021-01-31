import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavContainer from './containers/NavContainer'
import Title from './components/Title'
import Menu from './components/Menu'
import SearchResultsContainer from './containers/SearchResultsContainer'
import ReviewFormContainer from './containers/ReviewFormContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <NavContainer />
        <SearchResultsContainer />
        <Switch>
          <Route exact path='/review' component={ReviewFormContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
