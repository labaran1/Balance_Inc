import React, {useReducer,useEffect} from 'react'
import axios from 'axios';
import AppContext from './appContext'
import appReducer from './appReducer'
import  {GET_TODOS, ADD_TODO, DELETE_TODO} from '../types'


const AppState = props => {
const initialState = {
    todos:["love", "hate"]
}

const [state, dispatch] = useReducer(appReducer, initialState)

const addTodo = (value)=> {
    //Add to api 

    dispatch({
        type:ADD_TODO,
        payload:{
            value,
        }
    })
}


useEffect(() => {
   let rest = axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
   rest.then(me => {
      me.data.forEach(dat => {
          addTodo(dat.title)
      })
   })
}, [])

const remove = (val) => {
console.log(val);
    // dispatch({
    //     type:DELETE_TODO,
    //     payload:{
    //         val,
    //     }
    // })
}

return(
    <AppContext.Provider
    value={{
        todos:state.todos,
        addTodo,
        remove,
    }}
    >

        {props.children}
    </AppContext.Provider>
)
}


export default AppState;