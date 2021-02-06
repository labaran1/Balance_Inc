import React, { useContext } from 'react';
import SearchBox from './SearchBox';
import './Home.css'

import AppContext from '../Context/AppContext/appContext'
export default function Home() {
    const appContext = useContext(AppContext);
    // const [todos]= appContext;
    return (
        <center>
            <div className="searchContainer">
                <h1>Todo  App</h1>
                <SearchBox/>
            
            </div>


<ul>
    {appContext.todos}
</ul>


        </center>
    )
}
