import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <Menu >
      <Link to='/'>
        <Menu.Item header>
          NewsFlash &nbsp;
          <Icon name='lightning' />
        </Menu.Item>
      </Link>

      <Link to='/'>
        <Menu.Item name='Home' />
      </Link>

      <Link to='/about'>
        <Menu.Item name='About' />
      </Link>
      
      <Link to='/trending'>
        <Menu.Item name='Trending' />
      </Link>
    </Menu>
  )
}

export default Navbar