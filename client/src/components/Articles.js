import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const Articles = props => {
  const { title, description, urlToImage, url, author, publishedAt } = props.article
  return (
    <div>
      <div className="articleBox">
      <Grid columns='equal'>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>{title}</Segment>
            <Segment>{description}</Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <Image src={urlToImage} alt=""/>
            </Segment>
            <Segment>
              <p>{url}</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{author}</Segment>
            <Segment>{publishedAt}</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    </div>
  )
}

export default Articles 

