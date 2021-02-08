import React,{useContext, useState} from 'react'
import AppContext from '../Context/AppContext/appContext'
import './SearchBox.css'

export default function SearchBox() {
    const [searchtext, setSearchtext] = useState("")
    const [placeHolder, setPlaceHolder] = useState('add new todo')
const appContext = useContext(AppContext)
    const sub=(e)=>{
        e.preventDefault()

        if(searchtext !=="" || null || undefined){


           if(appContext.todos.includes(searchtext)){
            //    alert("hello")
           
    setPlaceHolder("Add a todo")


       
           
           }else{
            appContext.addTodo(searchtext)

           }

        }
 
       
        setPlaceHolder("Add a todo")
        setSearchtext("")
    }
    return (
        <form onSubmit={sub}>
            <input type="text" name="search" id="name" placeholder={placeHolder} value={searchtext} onChange={(e)=>{
setSearchtext(e.target.value)
            }}/>
            <button type="submit"><i class="fas fa-plus "></i>

</button>
        </form>
    )
}
