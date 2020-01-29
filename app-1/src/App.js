import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
  }

  handleInputChange(val){
    // console.log('hit', val)
    this.setState({ text: val })
  }

  render() {
    console.log(this.state.text)
    return (
    <div className="App">
      <input onChange={e => this.handleInputChange(e.target.value)}/>
      <div>{this.state.text}</div>
    </div>
    )
  }
}

export default App
