import React, {Component} from 'react';
import {View, Modal,StyleSheet, Text, Button,TextInput} from 'react-native';



class TodoCreateModal extends Component{

    state = {
        todoTitle : '',
        todoDescription : '',
        buttonTitle : 'Add'
    }

    todoSubmitterHandler = () => {
        if (this.state.todoTitle === ''){
            alert("Enter Something you want to do");
        }
        else{
            this.props.todoAdded(this.state.todoTitle, this.state.todoDescription);
            this.setState({
                todoTitle : '',
                todoDescription : ''
            })
        }
    }


    onAddTitleHandler = val =>{
        this.setState({
            todoTitle : val,
        })
    }

    onAddDescriptionHandler = val =>{
        this.setState({
            todoDescription : val, 
        })
    }
    render(){
        let buttonTitle = 'Add';

        if(this.props.openTodo === true){
            buttonTitle = 'Update';
        }

        return(
            <Modal  visible = {this.props.newTodo === true || this.props.openTodo === true} animationType = "slide">
                <View style = {styles.todoModal}>
                    <TextInput 
                        style = {styles.todoTitle}
                        placeholder = "Title"
                        name = {this.todoTitle}
                        onChangeText = {this.onAddTitleHandler}
                    />
                    <TextInput
                        editable = {true}
                        maxLength = {100}
                        multiline = {true}
                        numberOfLines = {10}
                        style = {styles.todoDescription}
                        placeholder = "Description"
                        onChangeText = {this.onAddDescriptionHandler}
                    />
                    <View>
                        <Button title = {buttonTitle}  
                            onPress = {this.todoSubmitterHandler}
                        />
                        <Button title = "close"  
                            onPress = {this.props.closeModal}
                            color = "red"
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}
export default TodoCreateModal;

const styles = StyleSheet.create({
    todoModal:{
        height: "75%",
        marginTop: "25%",
        paddingTop : "55%",
        paddingLeft : 20,
        paddingRight : 20,
    },
    todoTitle:{
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        height: 40
    },
    todoDescription:{
        height : 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 30
    }
})