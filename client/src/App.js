import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ArticlesContainer from './containers/ArticlesContainer';
import TrendingContainer from './containers/TrendingContainer';
import { connect } from 'react-redux'
import { fetchArticles } from './redux/actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ArticlesContainer />
        <TrendingContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => {dispatch(fetchArticles())}
  }
}

export default connect(null, mapDispatchToProps)(App);
