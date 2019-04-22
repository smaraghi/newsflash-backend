import React from 'react'
import { Modal, Button, Icon, Label } from 'semantic-ui-react'
import { likeArticle } from '../redux/actions'
import { connect } from 'react-redux'

const ArticleModal = props => {

  return (
    <Modal.Content>
        <iframe height='500' width='850' src={props.article.url} title={props.article.title}></iframe>
        <div className='voting-buttons-container'>
          <Button as='div' labelPosition='right'>
            <Button onClick={() => props.likeArticle(props.article)} inverted color='twitter' icon>
              <Icon name='heart' />
              Like
            </Button>
            <Label basic pointing='left'>
              500
              {/* fetch call to backend for vote number potentially */}
            </Label>
          </Button>
          <Button as='div' labelPosition='left'>
            <Label basic pointing='right'>
              500
            </Label>
            <Button inverted color='vk' icon>
              <Icon name='x' />
              Dislike
            </Button>
          </Button>
        </div>
    </Modal.Content>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    likeArticle: (article) => dispatch(likeArticle(article))
  }
}

export default connect(null, mapDispatchToProps)(ArticleModal)