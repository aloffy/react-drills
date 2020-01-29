import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = (val) => {
    this.setState({ username: val})
  }
  handlePasswordChange = (val) => {
    this.setState({ password: val})
  }
  loginAlert = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render(){
    return (
      <div className="App">
        <input onChange={ev => this.handleUsernameChange(ev.target.value)}/>
        <input onChange={ev => this.handlePasswordChange(ev.target.value)}/>
        <button onClick={this.loginAlert}>Login</button>
      </div>
    )
  }
    
}

export default App;
