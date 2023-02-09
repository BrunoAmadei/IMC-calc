import React from "react"


export default function Altura(props) {
    return (
        <div>
            <label>
                <input
                    type={'text'}
                    value={props.a}
                    onChange={(e) => props.setA(e.target.value)}
                    placeholder={'Digite sua altura'}
                />
            </label>
        </div>
    )
}

