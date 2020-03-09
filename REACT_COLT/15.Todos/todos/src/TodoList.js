import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    //this.addTodos = this.addTodos.bind(this)
    //this.deleteTodo = this.deleteTodo.bind(this)
    //this.editTodo = this.editTodo.bind(this)

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }

  // deleteTodo(id){
  //     this.setState(state => ({
  //             todos: state.todos.filter(todo => todo.id !== id)
  //     }))
  //     console.log('deleting')
  // }

  // editTodo(id){

  // }

  // addTodos(todo){
  //     this.setState(state => ({
  //         todos: [...state.todos, todo]
  //     }))
  // }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  update(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, task: updatedTask}
      }
      return todo;
    });

    this.setState({todos: updatedTodos})
  }

  toggleCompletion(id){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      // <div className='TodoList'>

      //     {this.state.todos.map(todo => <Todo task={todo.task} id={todo.id} deleteTodo={() => this.deleteTodo(todo.id)} editTodo={() => this.editTodo} />)}
      //     <NewTodoForm addTodos={this.addTodos}/>
      // </div>

      <div className='TodoList'>
        <h1>Todo List</h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
