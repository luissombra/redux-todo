import {ADD_TODO, TOGGLE_TODO, addTodo, toggleTodo} from '../actions/todos';

export default todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, {title: action.text, completed: false}]
        case TOGGLE_TODO:
            return state
                        .map((todo, i) => 
                            i === action.index 
                            ? { ...todo, completed: !todo.completed }
                            : todo
                        );
        default:
            return state
    }
}