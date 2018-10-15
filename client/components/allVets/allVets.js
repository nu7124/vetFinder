import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

class AllVets extends Component{
  constructor(){
    super()
    this.state={
      vets:[]
    }
    this.likeVet=this.likeVet.bind(this)
  }

  async componentDidMount(){
    let vets = await axios.get('/api/vets/')
    this.setState({vets:vets.data})
    console.log(this.state)
  }

  async likeVet(vet){
    await axios.post(`/api/users/like/${vet.id}`)
    console.log("Vet added")
  }

  render(){
    return (
      <div>
        {
          
          this.state.vets.length && this.state.vets.map(vet => {
            return (
                <div>
                  <img src={vet.image}/>
                  <h3>{vet.firstName}</h3>
                  <h5>{vet.address}</h5>
                  <button onClick={()=>this.likeVet(vet)}>Like</button>
                </div>
              )
          })
        }
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
