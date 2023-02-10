import React from "react";



export default class Resultado extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="resultado">
                <h2>Resultado:</h2>
                <p> {this.props.r}</p>
            </div>
        )
    }
}