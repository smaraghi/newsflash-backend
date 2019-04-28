import React from 'react'
import {connect} from 'react-redux'
import { setQueryNum } from '../redux/actions';

const Query = (props) => {
  return (
    <div>
      <input type='number' onChange={(e) => props.philturd(e.target.value)}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  philturd: (i) => dispatch(setQueryNum(i))
})

export default connect(null, mapDispatchToProps)(Query) 