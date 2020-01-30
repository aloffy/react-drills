import React from 'react';
import './App.css';
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      list: [],
      task: ''
    }
  }

  handleInputChange = (val) => {
    this.setState({ task: val})
  }
  addTask = () => {
    this.setState({
      list: ([...this.state.list, this.state.task])
    })
  }

  render(){
    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <NewTask handleInputChange={this.handleInputChange}/>
        <button onClick={this.addTask}>Add Task</button>
        <List listDisplay={this.state.list}/>
      </div>
    )
  }
}

export default App;
