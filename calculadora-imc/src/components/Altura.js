import React from "react"


export default function Altura(props) {
    return (
        <div className="altura">
            <label>
            Digite sua altura:
                <input
                    type={'text'}
                    value={props.a}
                    onChange={(e) => props.setA(e.target.value)}
                />
            </label>
        </div>
    )
}

