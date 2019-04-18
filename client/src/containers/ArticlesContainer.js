import React, { Component } from 'react';
import Articles from '../components/Articles';
import { connect } from 'react-redux'

class ArticlesContainer extends Component {
  render() { 
    return ( 
      <div>
        Articles Container
        {this.props.articles.map((article, i) => <Articles key={i} article={article} />)}
      </div>
     );
  }
}
 
const mapStateToProps = state => ({
  articles: state.articles 
})

export default connect(mapStateToProps)(ArticlesContainer);