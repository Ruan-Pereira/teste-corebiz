import React, { useState } from 'react';
import './style.css'

export default () => {

/*     const form = document.getElementById('formulario');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const [nome, email ] = ['nome','email'].map(
    name => form.querySelector(`[name="${name}"]`).value
  );
  alert(`${email}, ${nome} `);
}); */
    
    return (
       <div className="area_total_formulario">
           <div className="area_formulario">
                <h2>Participe de nossas news com promoções e novidades!</h2>
               
               <form id="formulario" name="" method="" action="" class="Notificações_Corebiz">
                <input     id="nome"
                            type="text"
                            name="nome"
                            data-rules="required"
                            className="input"
                            placeholder="Digite seu nome"
                            />

                    <input className="input"
                             id="email"
                            placeholder="Digite seu nome"
                            type="text"
                            name="email"
                            data-rules="required"/>

                    <label className="botão">
                         <button className="receber_novidades" type="submit" value="Eu quero" />
                                             
                    </label>
               </form>
           </div>
           
       </div>
    );
}