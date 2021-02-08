import React, { useContext,useState } from 'react';
import SearchBox from './SearchBox';
import './Home.css'

import AppContext from '../Context/AppContext/appContext'
export default function Home() {

    const appContext = useContext(AppContext);
    const [clickN0, setClickN0] = useState()
    const rmMe = (value)=> {
        console.log(value);
        // todo: complete function
        // appContext.remove(value)

    }

    return (
        <center>
            <div className="searchContainer">
                <h1>Todo  App</h1>
                <SearchBox/>
            
            </div>


<div>
{/* {console.log(list)} */}
{appContext.todos.map(me => <li  key={appContext.todos.indexOf(me)} className="tcard">{me} <span onClick={()=> {rmMe(appContext.todos.indexOf(me))}}>X</span></li>)}
</div>


        </center>
    )
}



