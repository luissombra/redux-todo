import {ADD_TODO, TOGGLE_TODO, addTodo, toggleTodo} from '../actions/todos';

export default todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, {id: Date.now(), title: action.text, completed: false}]
        case TOGGLE_TODO:
            return state
                        .map((todo) => 
                            todo.id === action.id 
                            ? { ...todo, completed: !todo.completed }
                            : todo
                        );
        default:
            return state
    }
}