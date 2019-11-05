import React from 'react';
import {TextInput, Button, View, Text, StyleSheet} from 'react-native';

export default InputTodo = () => (
    <View style={styles.container}>
        <TextInput style={styles.input} />
        <Button title="Add" />
    </View>
)

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