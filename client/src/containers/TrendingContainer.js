import React, { Component } from 'react';
import Trending from '../components/Trending';
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingTrendingArticles } from '../redux/actions'
import TrendingMenu from '../components/TrendingMenu';

class TrendingContainer extends Component {

  componentDidMount(){
    this.props.fetchingTrendingArticles()
  }

  //decides which of the 10 articles to display
  handleActiveArticles = () => {
    let active = []
    if(this.props.activeItem === 'likes'){
      active = this.props.likes
    }
    else if(this.props.activeItem === 'dislikes'){
      active = this.props.dislikes
    }
    else {
      active = this.props.controversial
    }
    return active 
  }

  render() { 
    
    return ( 
      <div className='trending-container'>
        <TrendingMenu />
        <Item.Group divided>
          {this.handleActiveArticles().map((article, index) => <Trending key={index} article={article} /> )}
        </Item.Group>
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  likes: state.trendingArticles.likes,
  dislikes: state.trendingArticles.dislikes,
  controversial: state.trendingArticles.controversial,
  activeItem: state.activeItem
})

const mapDispatchToProps = dispatch => ({
  fetchingTrendingArticles: () => dispatch(fetchingTrendingArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingContainer);