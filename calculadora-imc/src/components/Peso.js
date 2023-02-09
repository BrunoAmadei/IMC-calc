import React, { useState } from "react"


function Peso(p, setP) {
    return (
        <div>
            <label>
                <input
                    type={'text'}
                    value={''}
                    onChange={(e) => setP(e.target.value)}>
                    
                </input>
            </label>
        </div>
    )
}

export default Peso;