import React, { Component } from 'react';
import Result from './Result';
import './Numbers.css';
class Numbers extends Component {

    constructor() {
        super();
        this.state = {
            numbers: '',//el numero ingresado en el arreglo
            results: []//arreglo de lo que estas sumando
        }
    }
    
    handleNumberChange = e => {
        const {target: {value}} = e;

        const numbers = Array.from(value); //agarra el valor del input y lo pone en array
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);
        // usa reduce con el anterior y el de ahorita para sumarlo entre ellos
        this.setState({
            numbers: value,
            //agrega la lista de numbers que an pasado
            results: [...this.state.results, result]
        })
    }

    render() {
        const {results} = this.state;
        return (
            <div className= "Numbers">
                <input
                    type="number"//nomas deja meter numeros
                    value={this.state.numbers}//el valor que se mete en el input
                    onChange= {this.handleNumberChange}
                />
                <ul> 
                    {
                        //llamo a un mapa que ensena lo que e puesto en el input
                        //lo sigue poniendo para que el usuario vea sus resultados
                        results.map((result, i) => (
                            <Result key={i} result={result}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Numbers;