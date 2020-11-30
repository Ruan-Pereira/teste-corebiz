import React from 'react';
import './style.css';
import Logo from '../../images/Logo_footer.png'
import Vtex from '../../images/Vtex.png'
import Fone from '../../images/Fone.png'
import Email from '../../images/email.png'


export default () => {
    return (
       <div className="footer">
          <div className="container_footer">
            <div>
                <h3>Localização</h3>
                <span />
                <h5>Avenida Andrômeda, 2000, Bloco 6 e 8</h5>
                <h5>Alphavile SP</h5>
                <h5>brasil@corebiz.org</h5>
                <h5>+55 11 3090 1039</h5>
            </div>
            <div className="buttons">
                    <button>
                        <img src={Fone} />
                        <h4>ENTRE EM CONTATO</h4>
                    </button>
                    <button>
                        <img src={Email}/>
                        <h4> FALE COM O NOSSO CONSULTOR ONLINE</h4>
                    </button>
            </div>
            <div className="creditos">
                    <div className="corebiz">
                        <p>Created by</p>
                        <img src={Logo} />
                    </div>
                    <div className="vtex">
                        <p>Powered by</p>
                        <img src={Vtex} />
                    </div>
                </div>
          </div>
       </div>
    );
}