import React, { Component } from 'react';
import Articles from '../components/Articles';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchingArticles } from '../redux/actions'
import { Grid } from 'semantic-ui-react'


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
      <div className="ui grid container">
        <div className="three column wide centered">
          <div className="ui three stackable cards">
            {this.props.articles.map((article, i) => <Articles key={i} article={article} />)}
          </div>
        </div>
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