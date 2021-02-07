import React,{useContext, useState} from 'react'
import AppContext from '../Context/AppContext/appContext'
import './SearchBox.css'

export default function SearchBox() {
    const [searchtext, setSearchtext] = useState("")
const appContext = useContext(AppContext)
    const sub=(e)=>{
        e.preventDefault()

appContext.addTodo(searchtext)
    }
    return (
        <form onSubmit={sub}>
            <input type="text" name="search" id="name" placeholder="add new todo" value={searchtext} onChange={(e)=>{
setSearchtext(e.target.value)
            }}/>
            <button type="submit"><i class="fas fa-plus "></i>

</button>
        </form>
    )
}
