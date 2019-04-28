import React, { Component } from 'react';
import Articles from '../components/Articles';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchingArticles } from '../redux/actions'
import Searchbar from '../components/Searchbar';

class ArticlesContainer extends Component {

  getCategory = () => {
    let category = this.props.location.pathname.split('/')[2]
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  componentDidMount(){
    this.props.fetchingArticles(this.getCategory())
  }

  filteredArticles = () => {
    return this.props.articles.filter(a => a.title.includes(this.props.searchText))
  }

  render() { 
    return ( 
      <React.Fragment>
        <h2>Browsing {this.getCategory()}</h2>
        <Searchbar />
        <div className="ui grid container">
          <div className="three column wide centered">
            <div className="ui three stackable cards">
              {this.filteredArticles().map((article, i) => <Articles key={i} article={article} />)}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
const mapStateToProps = state => ({
  articles: state.articles.sort((a, b) => a.title.localeCompare(b.title)),
  searchText: state.searchText
})

const mapDispatchToProps = dispatch => {
  return {
    fetchingArticles: (category) => dispatch(fetchingArticles(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer));