import React from 'react';
import './style.css';
import Logo from "../../images/Logo_Corebiz.png"
import Carrinho from "../../images/Compras.png"
import Search from "../../images/Search.png"
import User from "../../images/user.png"




export default () => {
    return (
       <div className="total_area">
           <div className="menu_superior_mobile">
                <div className="menu_mobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img className="logo" src={Logo} />
                <img className="cart_buy " src={Carrinho}/>
               
           </div>
           <div className="search">
                <input placeholder="O que você esta procurando?"/>     
                 <img src={Search} />
           </div>
              
              <div className="User">
                <img  src={User} />
                <h2 className="user_login">minha conta</h2>
              </div>
       </div>
    );
}