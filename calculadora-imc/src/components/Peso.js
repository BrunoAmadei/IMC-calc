import React from "react"


function Peso(props) {
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

export default Peso;