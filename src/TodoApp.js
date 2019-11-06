import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputTodo from './containers/InputTodo';
import ListTodo from './containers/ListTodo';
import { addTodo, toggleTodo } from './actions/todos';
import { connect } from 'react-redux';

class TodoApp extends React.Component {
    render(){
        const { todos, addTodo, toggleTodo } = this.props
        
        return (
            <View style={styles.container}>
                <InputTodo onAddTodoPress={addTodo} />
                <View style={{flex:1}}>
                    <ListTodo flex={5} todos={todos} onTodoPress={toggleTodo} sectionTitle="To-do" filter={{completed: false}}/>
                    <ListTodo flex={4} todos={todos} onTodoPress={toggleTodo} sectionTitle="Done" filter={{completed: true}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
});

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
    addTodo,
    toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
