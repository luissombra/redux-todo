import reducers from '../reducers';
import { addTodo } from '../actions/todos';
import { createStore } from 'redux';



const store = createStore(reducers)
store.dispatch(addTodo('some task to do'))
setTimeout(() => store.dispatch(addTodo('another task')), 1000)

export default store
