import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Segment } from 'semantic-ui-react'

class MainContainer extends Component {
  render() { 
    return ( 
      <div>
        <Grid stackable columns={2} verticalAlign='middle'>
          <Grid.Column >
            
              <Segment>
                <Link to='/articles/technology'>
                  <Button 
                  circular color='violet' size='massive'
                  >Tech
                </Button>
              </Link> 
                
              <Link to='/articles/sports'>
                <Button 
                  circular color='linkedin' size='massive' 
                  >Sports
                </Button>
              </Link>

              <Link to='/articles/health'>
                <Button 
                  circular color='yellow' size='massive'
                  >Health
                </Button>
              </Link>

                </Segment>
                <Segment>

                <Link to='/articles/entertainmnt'>
                  <Button
                    circular color='twitter' size='massive' 
                    >E.T.
                  </Button>
                </Link>

                <Link to='/articles/science'>
                  <Button
                    circular color='teal' size='massive' 
                    >Science
                  </Button>
                </Link>

                <Link to='/articles/business'>
                  <Button
                    circular color='facebook' size='massive' 
                    >Business
                  </Button>
                </Link>

              </Segment>
            
          </Grid.Column>
        </Grid>
      </div>
     );
  }
}

export default MainContainer ;