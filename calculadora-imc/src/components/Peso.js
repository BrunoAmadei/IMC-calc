import React from "react"


export default function Peso(props) {
    return (
        <div>
            <label>
                <input
                    type={'text'}
                    value={props.p}
                    onChange={(e) => props.setP(e.target.value)}
                    placeholder = {'Digit e seu peso'}    
                />
            </label>
        </div>
    )
}

