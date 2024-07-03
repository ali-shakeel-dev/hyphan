import React from 'react'
import "../styles/Button.css"

function Button({ text }) {
    return (
        <button id='mainBtn'>{text}</button>
    )
}

export default Button