import React, { Component } from 'react'
import { primeraMayuscula } from '../helper';

export default class Resumen extends Component {

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;
        if(!marca || !year || !plan ) {
            return null;
        }
        return(
            <div className="resumen">
                <h2>Resumen de Cotizavión</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del Auto: {year}</li>
            </div>
        )
    }

    render() {        
        return (
           <div>
               { this.mostrarResumen() }
              
           </div>
        )
    }
}
