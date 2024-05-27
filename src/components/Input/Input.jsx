import React from "react"

import "./Input.module.css"

function Input({ value, onChange }) {

    return (
        <input  type="number" 
            value={value}
            onChange={onChange}
        />
    )
}

export default Input