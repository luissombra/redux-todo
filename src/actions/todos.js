const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}


export {
    ADD_TODO,
    TOGGLE_TODO,
    addTodo,
    toggleTodo
}