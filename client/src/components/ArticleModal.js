import React, { Component } from 'react'
import { Modal, Button, Icon, Label, Header } from 'semantic-ui-react'
import { fetchingArticleData,  dislikeArticle, likeArticle } from '../redux/actions'
import { connect } from 'react-redux'

class ArticleModal extends Component {
  
  componentDidMount(){
    this.props.fetchingArticleData(this.props.article)
  }

  render(){
    return (
      <Modal.Content>
        <Header as='h2'>{this.props.article.title}</Header>
        <Modal.Description id='modal-description'>{this.props.article.description + '...'}</Modal.Description>
        <a href={this.props.article.url} target='_blank' rel="noopener noreferrer">Read More</a>
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
    fetchingArticleData: (article) => dispatch(fetchingArticleData(article)),
    likeArticle: (article, likes) => dispatch(likeArticle(article, likes)),
    dislikeArticle: (article, dislikes) => dispatch(dislikeArticle(article, dislikes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleModal) 