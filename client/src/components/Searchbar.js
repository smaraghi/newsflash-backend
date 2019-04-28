import React from 'react'
import {connect} from 'react-redux'
import {setSearchText} from '../redux/actions'

const Searchbar = (props) => {
  return (
    <div id='searchbar'>
      <input type='text' onChange={(e) => props.setSearchText(e.target.value)}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setSearchText: (text) => dispatch(setSearchText(text))
})

export default connect(null, mapDispatchToProps)(Searchbar)