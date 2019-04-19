import React from 'react';
import {FlatList} from 'react-native';
import TodoItem from '../TodoItem/TodoItem'

const todoList = props =>{

    return(
        <FlatList
            data = {props.todos}
            renderItem = {(info) =>(
                <TodoItem
                    todoTitle = {info.item.key + 1 + ". " + info.item.title}
                    todoDescription = {info.item.description}
                    showDescription = {false}
                    onItemSelected = {props.onItemSelected}
                />
            )}>
        </FlatList>
    )
} 
export default todoList;
