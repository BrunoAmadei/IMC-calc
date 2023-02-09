import React from "react";

function Calcular(props) {
    const calc = () => {
       props.res(props.peso / (props.altura * props.altura))
    }

    return(
        <div>
            <button onClick={calc}>Calcular</button>
        </div>
    )
}

export default Calcular;