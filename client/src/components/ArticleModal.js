import React from 'react'
import { Modal, Button, Icon, Label } from 'semantic-ui-react'
import { favoriteArticle } from '../redux/actions'
import { connect } from 'react-redux'

const ArticleModal = props => {

  return (
    <Modal.Content>
        <iframe height='500' width='850' src={props.article.url} title={props.article.title}></iframe>
        <div className='voting-button-container'>
          <Button animated onClick={() => props.favoriteArticle(props.article)} inverted color='twitter'>
            <Button.Content visible>Favorite</Button.Content>
              <Button.Content hidden>
                <Icon name='heart'/>
              </Button.Content>
            </Button>
        </div>
    </Modal.Content>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    favoriteArticle: (article) => dispatch(favoriteArticle(article))
  }
}

export default connect(null, mapDispatchToProps)(ArticleModal)