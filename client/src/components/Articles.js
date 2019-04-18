import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const Articles = props => {
  return (
    <div>
      <Grid columns='equal'>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>{props.article.title}</Segment>
            <Segment>{props.article.description}</Segment>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Articles 

