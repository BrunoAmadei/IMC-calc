import React from "react";

function Calcular(props) {
    const calc = () => {
       props.res((props.peso / (props.altura * props.altura)).toFixed(2))
    }

    return(
        <div className="btn-calc">
            <button onClick={calc}>Calcular</button>
        </div>
    )
}

export default Calcular;