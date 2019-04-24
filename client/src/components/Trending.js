import React from 'react'
import { Item } from 'semantic-ui-react';

const Trending = props => {
  const { image, title, author, description, url, likes, dislikes } = props.article
  
  const formatDate = () => {
    let date = props.article.date.split('T')[0]
    let year = date.split('-')[0]
    let day = date.split('-')[1]
    let month = date.split('-')[2]
    return `${day}-${month}-${year}`
  }
  

  return (
    <Item>
      <Item.Image src={image} />
      <Item.Content>
        <Item.Header as='a' href={url}>{title}</Item.Header>
        <Item.Meta>
          {author} - {formatDate()}
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
      </Item.Content>
      <Item.Content>
       Likes: {likes} Dislikes: {dislikes}
      </Item.Content>
    </Item>
  )
}

export default Trending