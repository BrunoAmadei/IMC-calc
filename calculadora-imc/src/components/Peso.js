import React from "react"


export default function Peso(props) {
    return (
        <div className="peso">
            <label>
                Digite seu peso:
                <input
                    type={'text'}
                    value={props.p}
                    onChange={(e) => props.setP(e.target.value)}
                    placeholder = {'Digite e seu peso'}    
                />
            </label>
        </div>
    )
}

