import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const Articles = props => {
  return (
    <div>
      <div className="articleBox">
      <Grid columns='equal'>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>Title: {props.article.title}</Segment>
            <Segment>{props.article.description}</Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <Image src={props.article.urlToImage} alt=""/>
            </Segment>
            <Segment>
              <p>{props.article.url}</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{props.article.author}</Segment>
            <Segment>{props.article.publishedAt}</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    </div>
  )
}

export default Articles 

