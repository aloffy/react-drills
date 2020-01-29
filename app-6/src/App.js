import React from 'react';
import Todo from './Components/Todo'
import './App.css';

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
    let list = this.state.list.map(el => <Todo task={el}/>)

    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <div>
          <input onChange={ev => this.handleInputChange(ev.target.value)}/>
          <button onClick={this.addTask}>Add Task</button>
        </div>
        {list}
      </div>
    )
  }
}

export default App;
