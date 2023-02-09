import React from "react";

function Resultado(r) { 
    return(
        <div>
            <p>Resultado: {r.toFixed(2)}</p>
        </div>
    )
} 

export default Resultado;