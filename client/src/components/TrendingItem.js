import React from 'react'
import { Item, Icon } from 'semantic-ui-react';

const TrendingItem = props => {
  const { image, title, author, description, url, likes, dislikes } = props.article
  
  const formatDate = () => {
    let date = props.article.date.split('T')[0]
    let year = date.split('-')[0]
    let day = date.split('-')[1]
    let month = date.split('-')[2]
    return `${day}-${month}-${year}`
  }

  const handleTitle = () => {
    return title.length > 80 ? title.slice(0, 80).concat('...') : title
  }

  const handleAuthor = () => {
    return author ? author : 'Author not provided'
  }

  return (
    <Item>
      <Item.Image id='trending-image' src={image} />
      
      <Item.Content id='trending-content-container'>
        <Item.Header as='a' href={url}>{handleTitle()}</Item.Header>
        <Item.Meta>
          {handleAuthor()} - {formatDate()}
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
      </Item.Content>
      
      <Item.Content>
        <div>
          <Icon name='arrow up' color='blue'/>
          {likes} 
        </div>
        <div>
          <Icon name='arrow down' color='red'/>
          {dislikes}
        </div>
      </Item.Content>
    </Item>
  )
}

export default TrendingItem