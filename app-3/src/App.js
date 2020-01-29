import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      inputText: '',
      stuff: ['cake', 'sushi', 'cats', 'programming', 'yeah']
    }
  }

  handleInputChange(val){
    this.setState({inputText: val})
  }
  
  render(){
    let displayStuff = this.state.stuff
      .filter(el => el.includes(this.state.inputText))
      .map(el => <h2>{el}</h2>)
    
    return (
      <div className="App">
        <input onChange={e => this.handleInputChange(e.target.value)}/>
        <div>{displayStuff}</div>
      </div>
    );
  }
}

export default App;
