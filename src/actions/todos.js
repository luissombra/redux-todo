const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        index
    }
}


export {
    ADD_TODO,
    TOGGLE_TODO,
    addTodo,
    toggleTodo
}