import React from 'react';
import './style.css';
import Logo from "../../images/Logo_Corebiz.png"
import Carrinho from "../../images/Compras.png"
import Search from "../../images/Search.png"


export default () => {
    return (
       <div>
           <div className="menu_superior_mobile">
                <div className="menu_mobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img className="logo" src={Logo} />
                <img className="carrinho" src={Carrinho}/>
           </div>
           <div className="pesquisar">
                <input placeholder="O que você esta procurando?"/>     
                 <img src={Search} />
           </div>
       </div>
    );
}