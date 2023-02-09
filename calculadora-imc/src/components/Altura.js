import React, { useState } from "react"


function Altura(a, setA) {
    return (
        <div>
            <label>
                <input
                    type={'text'}
                    value={''}
                    onChange={(e) => setA(e.target.value)}
                    placeholder={'Digite sua altura'}
                />
            </label>
        </div>
    )
}

export default Altura;
