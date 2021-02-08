import {GET_TODOS,ADD_TODO,DELETE_TODO} from '../types'
import AppContext from './appContext';


const  appReducer = (state, action)=> {
switch (action.type) {
    case ADD_TODO:{
        return {
            ...state,
          todos:[ action.payload.value, ...state.todos]
        }
    }
//     case DELETE_TODO:{
//         return {
// ...state,
// todos:[... state.todos.filter(todo =>state.todos.indexOf(todo) !== action.payload.val)]
//         }
//     }
   
        
    

    default:
        return {...state}
        break;
}







}


export default appReducer;