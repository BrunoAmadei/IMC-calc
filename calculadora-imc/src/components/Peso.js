import React from "react"

export default class Peso extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="peso">
                <label>
                    Digite seu peso:
                    <input
                        type={'text'}
                        value={this.props.p}
                        onChange={(e) => this.props.setP(e.target.value)}
                        placeholder={'Digite e seu peso'}
                    />
                </label>
            </div>
        )
    }
}