import React, { useState } from 'react';
import './style.css'

export default () => {


    return (
       <div className="area_total_formulario">
           <div className="area_formulario">
                <h2>Participe de nossas news com promoções e novidades!</h2>
               
               <form id="formulario" name="" method="" action="" class="Notificações_Corebiz">
                <input     id="nome"
                            type="text"
                            name="nome"
                            className="input"
                            placeholder="Digite seu nome"
                            />
                    <input className="input"
                             id="email"
                            placeholder="Digite seu nome"
                            type="text"
                            name="email"
                            />
                    <label className="botão">
                         <button className="receber_novidades" type="submit" value="Eu quero" >Eu quero!</button>
                                             
                    </label>
               </form>
           </div>
           
       </div>
    );
}