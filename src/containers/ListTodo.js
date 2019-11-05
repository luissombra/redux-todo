import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

class ListTodo extends React.Component {
    renderTodos(){
        return this.props.todos.map((todo, i) => <Text style={styles.todoText} key={i}>{todo.title}</Text>);
    }

    render(){
        return (
            <View style={styles.container}>
                { this.renderTodos() }
            </View>
        )
    }

}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    todoText: {
        fontSize: 20
    }
})

export default connect(mapStateToProps)(ListTodo)