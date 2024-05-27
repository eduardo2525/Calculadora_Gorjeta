import React from "react"

import "./Button.module.css"

function Button({ onClick, className, button }) {
    return (
        <button 
            className={className}
            onClick={onClick}
            >
                {button}
        </button>
    )
}

export default Button