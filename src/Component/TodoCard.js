import React from 'react'
import './TodoCard.css'

export default function TodoCard(todo) {
    return (
        <li className="tcard">
         {todo}   
        </li>
    )
}
