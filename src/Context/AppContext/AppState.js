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




return(
    <AppContext.Provider
    value={{
        todos:state.todos,
    }}
    >

        {props.children}
    </AppContext.Provider>
)
}


export default AppState;