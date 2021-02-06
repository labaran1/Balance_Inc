import React,{useState} from 'react'
import './SearchBox.css'

export default function SearchBox() {
    const [searchtext, setSearchtext] = useState("")
    return (
        <form>
            <input type="text" name="search" id="name" placeholder="add new todo" value={searchtext} onChange={(e)=>{
setSearchtext(e.target.value)
            }}/>
            <button type="submit"><i class="fas fa-plus "></i>

</button>
        </form>
    )
}
