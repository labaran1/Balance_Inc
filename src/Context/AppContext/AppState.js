import React, {useReducer} from 'react'
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


return(
    <AppContext.Provider
    value={{
        todos:state.todos,
        addTodo,
    }}
    >

        {props.children}
    </AppContext.Provider>
)
}


export default AppState;