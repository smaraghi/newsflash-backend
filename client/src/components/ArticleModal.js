import React, { useState, useEffect } from 'react'
import { Modal, Button, Icon, Label, Header } from 'semantic-ui-react'

const ArticleModal = (props) => {
  const [articleData, setArticleData] = useState({likes: 0, dislikes: 0})

  useEffect(() => {
    fetch('/articles/get_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', Accept: 'application/json'
      },
      body: JSON.stringify({
        article: props.article
      })
    }).then(res => res.json())
    .then((data) => setArticleData(data))
  }, [])

  const likeArticle = () => {
    setArticleData({...articleData, likes: articleData.likes + 1})
  }

  const dislikeArticle = () => {
    setArticleData({...articleData, dislikes: articleData.dislikes + 1})
  }

  const saveArticleData = (user_act) => {
    fetch('/articles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', Accept: 'application/json'
      },
      body: JSON.stringify({
        article: props.article,
        user_act: user_act
      })
    })
  }

  return (
    <Modal.Content>
      <Header as='h2'>{props.article.title}</Header>
      <Modal.Description id='modal-description'>{props.article.description + '...'}</Modal.Description>
      <a href={props.article.url} target='_blank' rel="noopener noreferrer">Read More</a>
      <div className='voting-buttons-container'>
        <div className='voting-buttons'>
          <Button as='div' labelPosition='right'>
            <Button onClick={() => {
              likeArticle()
              saveArticleData('like')
            }} inverted color='blue' icon>
              <Icon name='heart' />
              Like
            </Button>
            
            <Label basic pointing='left'>
              {articleData.likes}
            </Label>
          </Button>

          <Button as='div' labelPosition='left'>
            <Label basic pointing='right'>
              {articleData.dislikes}
            </Label>

            <Button onClick={() => {
              dislikeArticle()
              saveArticleData('dislike')
            }} inverted color='red' icon>
              <Icon name='x' />
              Dislike
            </Button>
          </Button>
        </div>
      </div>
    </Modal.Content>
  )
}

export default ArticleModal