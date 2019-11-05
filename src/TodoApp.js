import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputTodo from './containers/InputTodo';
import ListTodo from './containers/ListTodo';

export default TodoApp = (props) => (
    <View style={styles.container}>
        <InputTodo />
        <ListTodo />
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    }
});
