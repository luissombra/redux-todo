import React from 'react';
import {TextInput, Button, View, Text, StyleSheet} from 'react-native';
import { addTodo } from '../actions/todos';
import { connect } from 'react-redux';

class InputTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: '' }
        
        this._handleTextInputChange = this._handleTextInputChange.bind(this)
    }

    _handleTextInputChange(value){
        this.setState({ text: value })
    }

    render(){
        const { onAddTodoPress } = this.props

        return (
            <View style={styles.container}>
                <TextInput onChangeText={this._handleTextInputChange} value={this.state.text} style={styles.input} />
                <Button onPress={() => { onAddTodoPress(this.state.text); this.setState({text: ''}) }} title="Add" disabled={this.state.text.length <= 2} />
            </View>
        )     
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray'
    }
})

export default InputTodo