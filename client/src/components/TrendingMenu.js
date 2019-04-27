import React from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setActiveItem } from '../redux/actions'


const TrendingMenu = props => {
  
  return (
    <div id='menu-container'>
      <Menu tabular >
        <Menu.Item name='Popular' active={props.activeItem === 'likes'} onClick={() => props.setActiveItem('likes') } />
        <Menu.Item name='UnPopular' active={props.activeItem === 'dislikes'} onClick={() => props.setActiveItem('dislikes')}/>
        <Menu.Item name='Controversial' active={props.activeItem === 'controversial'} onClick={() => props.setActiveItem('controversial')} />
      </Menu>
    </div>
  )
}

const mapStateToProps = state => ({
  activeItem: state.activeItem
})

const mapDispatchToProps = dispatch => ({
  setActiveItem: (item) => dispatch(setActiveItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMenu)