import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import AddItem from './addItem';
import './css/todoItem.css';

// const Headline = () => {
//   return(
//     <h1 className="title">Hello World!</h1>
//   );
// }

// const Greeting = (props) => {
//   const {name,age} = props;
//   return(
//     <p>You will love it {props.name} ({age})!</p>
//   );
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Headline />
//         <Greeting name="Petr" age={25}/>
//       </div>
//     );
//   }
// }

// Greeting.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  state = {
    todos : ['wash up','eat some cheese','take a nap','buy flowers'],
    age: 30
  };
  clicked() {
    console.log('You clicked me!');
  };
  onDelete(item) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== item)
    }));
  };
  onAdd(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState(({
      todos: updatedTodos
    }));
  };
  render() {
    var ager = setTimeout(() => {
      this.setState({
        age : 35
      });
    },3000);
    var todos = this.state.todos;
    todos = todos.map((item,i) => {
      return (
        // <li key={i}>{item}</li>
        <li><TodoItem key={i} item={item} onDelete={this.onDelete}/></li>
      );
    });
    return (
      <div>
        <h1>Heloooooo</h1>
        <p>Ninjaas</p>
        <p><strong>Cheese name:</strong>{this.props.cheese.name}</p>
        <p><strong>Cheese smell factor:</strong>{this.props.cheese.smellFactor}</p>
        <p><strong>Cheese price:</strong>{this.props.cheese.price}</p>
        <div id='todo-list'>
          <p onClick={this.clicked}>The busiest people have the most leisure...</p>
          <p>{this.state.age}</p>
          <ul>
            {todos}
          </ul>
          <AddItem onAdd={this.onAdd} />
        </div>
      </div>

    );
  };
}

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }  
  handleDelete() {
    this.props.onDelete(this.props.item);
  }
  render() {
    return (
      <div className='todo-item'>
        <span className='item-name'>{this.props.item}</span>
        <span className='item-delete' onClick={this.handleDelete}> x </span>
      </div>
    );
  }
} 

class App extends Component {
  render() {
    return (
      <TodoComponent cheese={myCheese} />
    );
  }
}

var myCheese = {name: 'Comembert', smellFactor: 'Extreme pong', price: '3.50'};

export default App;
