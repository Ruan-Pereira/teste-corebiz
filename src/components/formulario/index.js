import React, { useState } from 'react';
import './style.css'

export default () => {

    const [search, setSearch] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        console.log(event)
    }
    return (
       <div className="area_total_formulario">
           <div className="area_formulario">
                <h2>Participe de nossas news com promoções e novidades!</h2>
               
               <form   class="Notificações_Corebiz">
                <input      className="input"
                            placeholder="Digite seu nome"
                            value={search}
                            type="text"
                            name="name"
                            data-rules="required"
                            onChange={e => setSearch(e.currentTarget.value)}
                            />

                    <input className="input"
                            placeholder="Digite seu nome"
                            type="text"
                            name="email"
                            data-rules="required"/>

                    <label className="botão">
                         <input className="receber_novidades" type="submit" value="Eu quero" onChange={handleSubmit}/>
                                             
                    </label>
               </form>
           </div>
           
       </div>
    );
}