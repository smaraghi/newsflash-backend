import React from 'react'
import { Card, Image, Button, Modal } from 'semantic-ui-react'
import ArticleModal from './ArticleModal';

const Articles = props => {
  const getImage = () => {
    return props.article.urlToImage ? props.article.urlToImage : require('../images/default.png')
  }

  const formatDate = () => {
    let date = props.article.publishedAt.split('T')[0]
    let year = date.split('-')[0]
    let day = date.split('-')[1]
    let month = date.split('-')[2]
    return `${day}-${month}-${year}`
  }

  const { title, description, author, publishedAt } = props.article
  return (
    <Card>
      <Image src={getImage()} alt=""/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{author}</Card.Meta>
        <Card.Meta>{formatDate()}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>  
      <Modal trigger={<Button inverted color='blue'>Read More</Button>} centered={false}>
       <ArticleModal article={props.article}/>
      </Modal>
    </Card>
  )
}

export default Articles 

