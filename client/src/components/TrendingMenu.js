import React, { useContext } from 'react'
import { Menu } from 'semantic-ui-react'
import ShopContext from '../context/shop-context'

const TrendingMenu = props => {
  const context = useContext(ShopContext)
  
  return (
    <div id='menu-container'>
      <Menu  >
        <Menu.Item name='Popular' onClick={() => context.handleActiveItem('likes') } />
        <Menu.Item name='UnPopular'  onClick={() => context.handleActiveItem('dislikes')}/>
        <Menu.Item name='Controversial'  onClick={() => context.handleActiveItem('controversial')} />
      </Menu>
    </div>
  )
}

export default TrendingMenu 