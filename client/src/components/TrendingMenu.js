import React from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setActiveItem } from '../redux/actions'


const TrendingMenu = props => {
  
  return (
    <div id='menu-container'>
      <Menu  >
        <Menu.Item name='Popular' onClick={() => props.setActiveItem('likes') } />
        <Menu.Item name='UnPopular'  onClick={() => props.setActiveItem('dislikes')}/>
        <Menu.Item name='Controversial'  onClick={() => props.setActiveItem('controversial')} />
      </Menu>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setActiveItem: (item) => dispatch(setActiveItem(item))
})

export default connect(null, mapDispatchToProps)(TrendingMenu)