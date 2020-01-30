import React from 'react'
import Todo from '../Components/Todo'


class List extends React.Component {
  render(){
    return <div>{this.props.listDisplay.map(el => <Todo el={el}/>)}</div>
  }
}

export default List