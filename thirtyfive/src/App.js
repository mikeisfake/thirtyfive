import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import NavContainer from './containers/NavContainer'
import Title from './components/Title'
import ReviewFormContainer from './containers/ReviewFormContainer'
import RandomMovieContainer from './containers/RandomMovieContainer'
import { About } from './containers/About'


function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <Switch>
          <Route exact path="/" component={NavContainer} />
          <Route exact path='/review' component={ReviewFormContainer} />
          <Route exact path='/about' component={About}/>
        </Switch>
        <RandomMovieContainer />
      </Router>
    </div>
  );
}

export default App;
