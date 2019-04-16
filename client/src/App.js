import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ArticlesContainer from './containers/ArticlesContainer';
import TrendingContainer from './containers/TrendingContainer';
import CategorysContainer from './containers/CategorysContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CategorysContainer />
        <ArticlesContainer />
        <TrendingContainer />
      </div>
    );
  }
}

export default App;
