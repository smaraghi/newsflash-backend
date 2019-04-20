import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const Articles = props => {
  const { title, description, urlToImage, author, publishedAt } = props.article
  return (
    <Card>
      <Image src={urlToImage} alt=""/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{author}</Card.Meta>
        <Card.Meta>{publishedAt}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>  
      <Button inverted color='blue'>Read More</Button>
    </Card>
  )
}

export default Articles 

