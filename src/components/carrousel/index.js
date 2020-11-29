import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Api from './Api'
import './style.css'
/* import Positivo from '../../images/Positivo.png'
import Negativo from '../../images/Negativo.png'  */


export default () => {
  
  const [teste, setProdutos ] = useState([]);
  
useEffect(() => {
  const loadproducts = async() => {
    
    let list = await Api.getprodutos();
    setProdutos(list[0].Array_products)
  
  }
  loadproducts();
}, []);

  var settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:4,
    adaptiveHeight: true,
    adaptiveHeight:true,

    arrows: true
    // responsive: [
     
    //  {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //       arrows: true
    //     }
    //   },
    //   {
    //     breakpoint: 620,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //       arrows:true
    //     }
    //   },
    
      
    // ]
  };

let variavel = '';
 
const formactNumber = (item) => {
if(item > 0){
     return (item / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
  }
}
 /* const starRating = (item) => {
 var i =1
  for (i; i <= 5; i++) {
    if (i <= item) {
     <h1>estrela vermelha</h1>
    } else {
      <h1>estrela branca</h1>
    }
  }
  return starRating;
} 
 */

  return(
    
    <div class="area_total_carrousel " >
      <div className="area_title">
        <h2 className="Mais_vendidos">Mais vendidos</h2>
          <span ></span>
      </div>
      <Slider className="Slider" {...settings}>
      
       {teste.map ((item, key) =>(
          <div class="carrousel">
             <div className="image_product">
              <img  src={`${item.imageUrl}`} alt="happy" />
             </div>
             
              <div className="info_product">
                <div className="title">
                  <h3>{item.productName}</h3><br/> 
                </div>

                {/* { starRating(item.stars) }  */}
                <div className="listPrice">
                   {formactNumber(item.listPrice)}
            
                </div>

                <div className="Price">
                  <h4>por <b>{formactNumber(item.price)}</b></h4>
                </div>

                <div className="installments">
                    <p> {( 
                        variavel = item.installments[0] && item.installments[0]  ? (
                          ' ou em  ' +
                          item.installments[0].quantity +

                          'x de ' +
                              //(item.installments[0].value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
                             (formactNumber(item.installments[0].value))
                              ) : (
                            ''
                          )
                        )} 
                    </p>
                </div>
              </div>

                <div className="footer_products">
                   <h3>Comprar</h3>
                </div>
          </div>
         ))} 
        
    </Slider>
    </div>
  )
};