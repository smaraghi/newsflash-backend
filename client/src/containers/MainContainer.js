import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const MainContainer = () => {
  return ( 
    <div>
      <img id='homepage-news-image' src='https://i.cbc.ca/1.1562152.1461019011!/httpImage/image.jpg_gen/derivatives/16x9_780/hi-newspapers-852.jpg' alt='newspaper' />

      <div className='homepage-button-container'>
        <Link to='/articles/technology'>
          <Button 
            id='homepage-button'
            circular color='pink' size='massive'>
            Tech
          </Button>
        </Link> 
        
      <Link to='/articles/sports'>
        <Button 
          id='homepage-button'
          circular color='linkedin' size='massive'>
          Sports
        </Button>
      </Link>

      <Link to='/articles/health'>
        <Button 
          id='homepage-button'
          circular color='yellow' size='massive'>
          Health
        </Button>
      </Link>
    </div>
        
    <div className='homepage-button-container'>
      <Link to='/articles/entertainment'>
        <Button
          id='homepage-button'
          circular color='vk' size='massive'>
          Entertainment
        </Button>
      </Link>

        <Link to='/articles/science'>
          <Button
            id='homepage-button'
            circular color='teal' size='massive'>
            Science
          </Button>
        </Link>

        <Link to='/articles/business'>
          <Button
            id='homepage-button'
            circular color='facebook' size='massive'>
            Business
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainContainer ;