import React, { Component } from 'react';
import Articles from '../components/Articles';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchingArticles } from '../redux/actions'


class ArticlesContainer extends Component {

  fetchRoutes = () => {
    let category = this.props.location.pathname.split('/')[2]
    this.props.fetchingArticles(category)
  }

  componentDidMount(){
    
    this.fetchRoutes()
  }

  render() { 
    return ( 
      <div>
        {this.props.articles.map((article, i) => <Articles key={i} article={article} />)}
      </div>
     );
  }
}
 
const mapStateToProps = state => ({
  articles: state.articles 
})

const mapDispatchToProps = dispatch => {
  return {
    fetchingArticles: (category) => dispatch(fetchingArticles(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer));