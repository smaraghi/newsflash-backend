import React, { Component } from 'react'
import { Modal, Button, Icon, Label } from 'semantic-ui-react'
import { likeArticle, fetchingArticleLikes, fetchingArticleDislikes, dislikeArticle } from '../redux/actions'
import { connect } from 'react-redux'

class ArticleModal extends Component {

  componentDidMount(){
    this.props.fetchingArticleLikes(this.props.article)
    this.props.fetchingArticleDislikes(this.props.article)
  }

  render(){
    return (
      <Modal.Content>
          <iframe height='500' width='850' src={this.props.article.url} title={this.props.article.title}></iframe>
          <div className='voting-buttons-container'>
            <Button as='div' labelPosition='right'>
              <Button onClick={() => this.props.likeArticle(this.props.article, this.props.likes)} inverted color='twitter' icon>
                <Icon name='heart' />
                Like
              </Button>
              <Label basic pointing='left'>
                {this.props.likes}
              </Label>
            </Button>
            <Button as='div' labelPosition='left'>
              <Label basic pointing='right'>
                {this.props.dislikes}
              </Label>
              <Button onClick={() => this.props.dislikeArticle(this.props.article, this.props.dislikes)} inverted color='vk' icon>
                <Icon name='x' />
                Dislike
              </Button>
            </Button>
          </div>
      </Modal.Content>
    )
  }
}

const mapStateToProps = state => ({
  likes: state.articleLikes,
  dislikes: state.articleDislikes
})

const mapDispatchToProps = dispatch => {
  return {
    likeArticle: (article, likes) => dispatch(likeArticle(article, likes)),
    fetchingArticleLikes: (article) => dispatch(fetchingArticleLikes(article)),
    dislikeArticle: (article, dislikes) => dispatch(dislikeArticle(article, dislikes)),
    fetchingArticleDislikes: (article) => dispatch(fetchingArticleDislikes(article))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleModal) 