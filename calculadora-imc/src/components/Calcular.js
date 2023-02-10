import React from "react";

class Calcular extends React.Component {
    constructor(props) {
        super(props)
        this.calc = this.fcalc.bind(this)
    }
    
    fcalc() {
        const res = (this.props.peso / (this.props.altura * this.props.altura))
        this.props.res(res.toFixed(2))
    }
    
    render(){
        return (
            <div className="btn-calc">
                <button onClick={this.calc}>Calcular</button>
            </div>
        )
    }
    
}
export default Calcular;