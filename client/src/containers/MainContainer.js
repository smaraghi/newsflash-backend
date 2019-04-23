import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class MainContainer extends Component {
  render() { 
    return ( 
      <div>
        <div className='homepage-button-container'>
          <Link to='/articles/technology'>
            <Button 
            id='homepage-button'
            circular color='violet' size='massive'
            >Tech
          </Button>
        </Link> 
          
        <Link to='/articles/sports'>
          <Button 
            id='homepage-button'
            circular color='linkedin' size='massive' 
            >Sports
          </Button>
        </Link>

        <Link to='/articles/health'>
          <Button 
            id='homepage-button'
            circular color='yellow' size='massive'
            >Health
          </Button>
        </Link>
      </div>
          
      <div className='homepage-button-container'>
          <Link to='/articles/entertainment'>
            <Button
              id='homepage-button'
              circular color='twitter' size='massive' 
              >E.T.
            </Button>
          </Link>

          <Link to='/articles/science'>
            <Button
              id='homepage-button'
              circular color='teal' size='massive' 
              >Science
            </Button>
          </Link>

          <Link to='/articles/business'>
            <Button
              id='homepage-button'
              circular color='facebook' size='massive' 
              >Business
            </Button>
          </Link>
        </div>
      </div>
     );
  }
}

export default MainContainer ;