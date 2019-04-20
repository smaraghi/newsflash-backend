import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TrendingContainer from './containers/TrendingContainer';
import MainContainer from './containers/MainContainer';
import { Route } from 'react-router-dom'
import ArticlesContainer from './containers/ArticlesContainer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <TrendingContainer />
        <Route exact path='/' component={MainContainer} />
        <Route path='/articles' component={ArticlesContainer} />
      </div>
    );
  }
}


export default App;
