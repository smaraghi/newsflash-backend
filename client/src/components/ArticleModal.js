import React, { Component } from 'react'
import { Modal, Button, Icon, Label, Header } from 'semantic-ui-react'
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
        {/* <iframe height='500' width='100%' src={this.props.article.url} title={this.props.article.title} ></iframe> */}
        <Header as='h2'>{this.props.article.title}</Header>
        <Modal.Description id='modal-description'>{this.props.article.description + '...'}</Modal.Description>
        <a href={this.props.article.url}>Read More</a>

        <div className='voting-buttons-container'>
          <div className='voting-buttons'>
            <Button as='div' labelPosition='right'>
              <Button onClick={() => this.props.likeArticle(this.props.article, this.props.likes)} inverted color='blue' icon>
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
                <Button onClick={() => this.props.dislikeArticle(this.props.article, this.props.dislikes)} inverted color='red' icon>
                <Icon name='x' />
                Dislike
              </Button>
            </Button>
            </div>
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