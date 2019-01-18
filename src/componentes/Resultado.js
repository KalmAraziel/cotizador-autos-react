import React, { Component } from 'react'

export default class Resultado extends Component {
  render() {
    const resultado = this.props.resultado;
    const mensaje = (!resultado) ? 'Elije Marca, Año y Tipo de Seguro' : 'El total es: $';
    return (
        <div className="resumen">
           {mensaje}
           <span>{resultado}</span>
         </div>
            
    )
  }
}
