import React from "react"


export default class Altura extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="altura">
                <label>
                    Digite sua altura:
                    <input
                        type={'text'}
                        value={this.props.a}
                        onChange={(e) => this.props.setA(e.target.value)}
                        placeholder = {'e.x: 1.85'}
                    />
                </label>
            </div>
        )
    }
}
