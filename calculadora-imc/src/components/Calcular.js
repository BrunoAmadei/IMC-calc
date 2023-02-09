import React, { useState } from "react";

function Calcular(peso, altura, res) {
    const calc = () => {
        res(peso / (altura * altura))
    }
}