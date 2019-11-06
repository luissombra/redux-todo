import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { matchFilter } from '../util';

class ListTodo extends React.Component {
    renderTodos(){
        const { onTodoPress, filter } = this.props
        return this.props.todos.filter(matchFilter(filter)).map(todo => (
            <TouchableOpacity style={[ styles.wrapper, todo.completed ? styles.completedWrapper : styles.uncompletedWrapper ]} key={todo.id} onPress={() => { onTodoPress(todo.id) }}>
                <Text style={[styles.todoText, todo.completed ? styles.completedTitleDecoration : null ]}>{todo.title}</Text>
            </TouchableOpacity>
        ))
    }

    render(){
        const { sectionTitle, flex } = this.props
        return (
            <View style={[styles.container, {flex: flex ? flex : null}]}>
                <Text style={styles.sectionTitle}>{sectionTitle}</Text>
                <ScrollView style={{flex: 1}}>
                    { this.renderTodos() }
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    sectionTitle: {
        textAlign: 'center'
    },
    container: {
        padding: 10
    },
    todoText: {
        fontSize: 20,
    },
    completedTitleDecoration: {
        textDecorationLine: 'line-through',
    },
    wrapper: {
        borderWidth: 2,
        borderColor: '#e6e6e6',
        padding: 10,
        margin: 4,
    },
    completedWrapper: {
      backgroundColor: '#f7f8fa' 
    },
    uncompletedWrapper: {
 
    }
})

export default ListTodo