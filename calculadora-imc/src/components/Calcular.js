import React, { useState } from "react";

function Calcular(peso, altura, res) {
    const calc = () => {
        res(peso / (altura * altura))
    }

    return(
        <div>
            <button onClick={calc}>Calcular</button>
        </div>
    )
}