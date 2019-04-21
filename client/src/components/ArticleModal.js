import React from 'react'
import { Modal } from 'semantic-ui-react'

const ArticleModal = props => {

  return (
    <Modal.Content>
      <iframe height='500' width='700' src={props.article.url} title={props.article.title}></iframe>
    </Modal.Content>
  )
}

export default ArticleModal