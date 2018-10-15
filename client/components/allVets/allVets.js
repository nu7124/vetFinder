import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AllVets extends Component{
  componentDidMount(){
    console.log("HI")
  }
  render(){
    return (
      <div>
      
      
      </div>
    )
  }
    
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    
  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(AllVets)
