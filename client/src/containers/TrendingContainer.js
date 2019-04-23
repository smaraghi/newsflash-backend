import React, { Component } from 'react';
import Trending from '../components/Trending';
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingTrendingArticles } from '../redux/actions'

class TrendingContainer extends Component {

  componentDidMount(){
    this.props.fetchingTrendingArticles()
  }

  render() { 
    console.log(this.props.trending)
    return ( 
      <Item.Group divided>
        {this.props.trending.map((article, index) => <Trending key={index} article={article}/>)}
      </Item.Group>
     );
  }
}
 
const mapStateToProps = state => ({
  trending: state.trendingArticles
})

const mapDispatchToProps = dispatch => ({
  fetchingTrendingArticles: () => dispatch(fetchingTrendingArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingContainer);