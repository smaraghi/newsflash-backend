import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <Menu >
      <Menu.Item header>NewsApp</Menu.Item>
      <Menu.Item name='About' color='teal'/>
      <Link to='/articles'>
        <Menu.Item name='Articles' color='violet'/>
      </Link>
      <Link to='/trending'>
        <Menu.Item name='Trending' color='green'/>
      </Link>

    </Menu>
  )
}

export default Navbar