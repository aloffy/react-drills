import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      foods: ['cake', 'cheese', 'pizza', 'broccoli', 'nachos']
    }
  }

  render(){
    let displayFoods = this.state.foods.map(el => {
      return <h2>{el}</h2>
    })

    return (
      <div className='App'>{displayFoods}</div>
    )
  }
}

export default App;
