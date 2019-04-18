import React, { Component } from 'react'
import { fetchingArticles } from '../redux/actions'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render() { 
    return ( 
      <div>
        <button onClick={() => this.props.fetchingArticles('technology')}>Tech</button>
        <br/>
        <button onClick={() => this.props.fetchingArticles('sports')}>Sports</button>
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