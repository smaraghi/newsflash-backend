import React, { Component } from 'react';
import './App.css';
import TrendingContainer from './containers/TrendingContainer';
import MainContainer from './containers/MainContainer';
import { Route, Switch } from 'react-router-dom'
import ArticlesContainer from './containers/ArticlesContainer';
import Navbar from './components/Navbar';
import About from './components/About'

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/articles' component={MainContainer} />
          <Route exact path='/trending' component={TrendingContainer} />
          <Route exact path='/about' component={About} />
          <Route path='/articles' component={ArticlesContainer} />
        </Switch>
      </div>
    );
  }
}


export default App;
