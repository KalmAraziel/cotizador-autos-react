import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';
import {TransitionGroup, CssTransition } from 'react-transition-group';
class App extends Component {
  // es un objeto global de toda la aplicacion
  state = {
    resultado: '',
    datos: {}
  };
  
  cotizarSeguro = (datos)  => {    
    const { marca, plan , year} = datos;
    // Agregar una base de 2000
    let resultado = 2000;
    // Obtener la diferencia de años y cada año restar el 3%
    const diferencia = obtenerDiferenciaAnio(year);    
    // por cada año restar el 3% al valor del seguro
    resultado -= ( (diferencia*3) *resultado ) / 100;    
    // Americano 15% Asiatico 5% y europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca)  * resultado;
    // PLan auto basico , imcrementa el valor 20% y cobertura completa 50%    
    let incrementoPlan = obtenerPlan(plan);    
    // dependiendo del plan incrementar
    resultado = parseFloat( incrementoPlan * resultado).toFixed(2);
    //crear objeto para el resumen
    const datosAutos = {
      marca: marca,
      plan: plan,
      year: year
    }
    // ya tenemos el costo lo seteamos al state global de la app.
    this.setState({
      resultado: resultado,
      datos: datosAutos
    });
  }

  render() {   
    return (
      <div className="contenedor">
        <Header  titulo = 'Cotizador de Autos'></Header>
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          ></Formulario>
          
          <Resumen 
            datos= {this.state.datos} 
            resultado= {this.state.resultado}
          ></Resumen>

           <Resultado resultado = {this.state.resultado}></Resultado>                
        </div>
      </div>
    );
  }
}

export default App;
