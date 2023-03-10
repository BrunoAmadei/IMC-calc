import React from "react";

export default class Tabela extends React.Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Classificação
                        </th>
                        <th>
                            IMC
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abaixo do peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>

                    <tr>
                        <td>Peso normal</td>
                        <td>Entre 18,5 e 24,9</td>
                    </tr>

                    <tr>
                        <td>Obesidade grau I</td>
                        <td>Entre 30 e 34,9</td>
                    </tr>

                    <tr>
                        <td>Obesidade grau II</td>
                        <td>Entre 35 e 39,9</td>
                    </tr>

                    <tr>
                        <td>Obesidade Mórbida </td>
                        <td>Maior que 40</td>
                    </tr>
                </tbody>
            </table >
        )
    }

}

    