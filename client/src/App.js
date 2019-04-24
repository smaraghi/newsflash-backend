import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TrendingContainer from './containers/TrendingContainer';
import MainContainer from './containers/MainContainer';
import { Route, Switch } from 'react-router-dom'
import ArticlesContainer from './containers/ArticlesContainer';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/articles' component={MainContainer} />
          <Route exact path='/trending' component={TrendingContainer} />
          <Route path='/articles' component={ArticlesContainer} />
        </Switch>
      </div>
    );
  }
}


export default App;
