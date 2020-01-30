import React from 'react'

class NewTask extends React.Component {
  render(){
    return <input onChange={ev => this.props.handleInputChange(ev.target.value)}/>
  }
}

export default NewTask