import reducers from '../reducers';
import { addTodo } from '../actions/todos';
import { createStore } from 'redux';



const store = createStore(reducers)
store.dispatch(addTodo('some task to do'))
store.dispatch(addTodo('another task'))

export default store
