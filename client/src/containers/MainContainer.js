import React, { Component } from 'react'
import { fetchingArticles } from '../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MainContainer extends Component {
  render() { 
    return ( 
      <div>
        <Link to={'/articles'}>
          <button onClick={() => this.props.fetchingArticles('technology')}>Tech</button>
          
          <button onClick={() => this.props.fetchingArticles('sports')}>Sports</button>

          <button onClick={() => this.props.fetchingArticles('health')}>Health</button>

          <button onClick={() => this.props.fetchingArticles('entertainment')}>Entertainment</button>

          <button onClick={() => this.props.fetchingArticles('science')}>Science</button>

          <button onClick={() => this.props.fetchingArticles('business')}>Business</button>

        </Link>
      </div>
     );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingArticles: (category) => dispatch(fetchingArticles(category))
  }
}

export default connect(null, mapDispatchToProps)(MainContainer) ;