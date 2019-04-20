import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ArticleModal = props => {
  return (
    <Modal.Content>
      <iframe height='500' width='850' src={props.article.url} title={props.article.title}></iframe>
    </Modal.Content>
  )
}

export default ArticleModal