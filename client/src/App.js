import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ArticlesContainer from './containers/ArticlesContainer';
import TrendingContainer from './containers/TrendingContainer';
import { connect } from 'react-redux'
import { fetchingArticles } from './redux/actions'
import MainContainer from './containers/MainContainer';


class App extends Component {

  // componentDidMount() {
  //   this.props.fetchingArticles()
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <ArticlesContainer />
        <TrendingContainer />
        <MainContainer />
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingArticles: () => {dispatch(fetchingArticles())}
  }
}

export default connect(null, mapDispatchToProps)(App);
