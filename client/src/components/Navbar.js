import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <Menu >
      <Menu.Item header>
        NewsFlash &nbsp;
        <Icon name='lightning' />
      </Menu.Item>

      <Link to='/about'>
        <Menu.Item name='About' />
      </Link>
      
      <Link to='/articles'>
        <Menu.Item name='Articles' />
      </Link>
      
      <Link to='/trending'>
        <Menu.Item name='Trending' />
      </Link>
    </Menu>
  )
}

export default Navbar