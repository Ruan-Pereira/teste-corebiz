import React from 'react';
import './style.css';
import Logo from '../../images/Logo_footer.png'
import Vtex from '../../images/Vtex.png'
import Fone from '../../images/Fone.png'
import Email from '../../images/email.png'


export default () => {
    return (
       <footer>
          <div className="container_footer">
          <div>
            <h3>Localização</h3>
            <h5>Avenida Andrômeda, 2000, Bloco 6 e 8</h5>
            <h5>Alphavile SP</h5>
            <h5>brasil@corebiz.org</h5>
            <h5>+55 11 3090 1039</h5>
           </div>
           <div className="bottons">
                <bottom>
                    <img src={Fone} />
                    <h4>ENTRE EM CONTATO</h4>
                </bottom>
                <bottom>
                    <img src={Email}/>
                    <h4> FALE COM O NOSSO CONSULTOR ONLINE</h4>
                </bottom>
           </div>
           <div className="creditos">
                <div className="corebiz">
                    Created by
                    <img src={Logo} />
                </div>
                <div className="vtex">
                    Powered by
                    <img src={Vtex} />
                </div>
             </div>
          </div>
       </footer>
    );
}