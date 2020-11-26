import React from 'react';
import './style.css'

export default () => {
    return (
       <div className="area_total_formulario">
           <div className="area_formulario">
                <h2>Participe de nossas news com promoções e novidades!</h2>
                <input placeholder="Digite seu nome"></input>
                <input placeholder="Digite seu email"></input>
                <botton className="receber_novidades">
                       <h4>Eu quero!</h4>
                </botton>
           </div>
       </div>
    );
}