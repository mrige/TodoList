/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import TodoList from './src/Component/TodoList/TodoList';
import TodoCreateModal from './src/Component/TodoCreateModal/TodoCreateModal';



export default class App extends Component{


  state = {
    todos: [],
    newTodo: false,
    openTodo: false,
    numTodo:0
  }


  onItemSelectedHandler = ()  =>{

    this.setState({
      openTodo : true,
    })
  }

  onCloseModalHandler = () =>{
    this.setState({
      newTodo : false,
      openTodo : false,
    })
  }

  onOpenNewTodoModalHandler = () =>{
    this.setState({
      newTodo : true
    })
  }

  onTodoAddHandler = (todoTitle, todoDescription) =>{

    this.setState(prevState =>{
      return{
        todos: prevState.todos.concat(
          {
            key: prevState.numTodo,
            title: todoTitle,
            description: todoDescription,
          }
        ),
        newTodo : false,
        numTodo : prevState.numTodo + 1
      }
    });
  }


  render() {
    return (
      <View style = {styles.container}>
        <TodoCreateModal 
          newTodo = {this.state.newTodo}
          todoAdded = {this.onTodoAddHandler}
          closeModal = {this.onCloseModalHandler}
          openTodo = {this.state.openTodo}
        />
        <TodoList
          todos = {this.state.todos}
          onItemSelected = {this.onItemSelectedHandler}
        />
        <Button title = "+ Add Todo" onPress = {this.onOpenNewTodoModalHandler}/>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20
  }
})
