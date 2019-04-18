import React, { Component } from 'react'
import { fetchingArticles } from '../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'

class MainContainer extends Component {
  render() { 
    return ( 
      <div>
        <Link to={'/articles/category'}>
          <Button 
            circular color='violet' size='massive'
            onClick={() => this.props.fetchingArticles('technology')}
            >Tech
          </Button>
          
          <Button 
            circular color='linkedin' size='massive' 
            onClick={() => this.props.fetchingArticles('sports')}>Sports
          </Button>

          <Button 
            circular color='yellow' size='massive'
            onClick={() => this.props.fetchingArticles('health')}>Health
          </Button>

          <Button
            circular color='twitter' size='massive' 
            onClick={() => this.props.fetchingArticles('entertainment')}
            >E.T.
          </Button>

          <Button
            circular color='teal' size='massive' 
            onClick={() => this.props.fetchingArticles('science')}>Science
          </Button>

          <Button
            circular color='facebook' size='massive' 
            onClick={() => this.props.fetchingArticles('business')}>Business
          </Button>

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