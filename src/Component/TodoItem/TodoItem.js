import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Button} from 'react-native'

const todoItem = (props) =>{

    let todoDesc = null;
    if(props.showDescription){
        todoDesc = (
            <View>
                <Text>
                    {props.todoDescription}
                </Text>
            </View>
            
        );
    }
    return(
        <TouchableOpacity onPress = {props.onItemSelected} >
            <View style = {styles.todoItem}>
                <Text>
                    {props.todoTitle}
                </Text>
                {todoDesc}
            
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todoItem:{
        width : "100%",
        padding: 3,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth : 1,
        borderBottomColor : "gray",
    },
})

export default todoItem