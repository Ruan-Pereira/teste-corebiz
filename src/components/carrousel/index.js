import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Api from './Api'
import './style.css'
import Filled from '../../images/Positivo.png'
import unfilled from '../../images/Negativo.png'
 


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
    dots: true,
    infinite: true,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:4,
    arrows: true,
    responsive: [
     
     {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
    
      
    ]
  };

let variavel = '';
 
const formactNumber = (item) => {
if(item > 0){
     return (item / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
  }
}
  const starRating = (item) => {
 let stars = item
 let starRating = [];

 for(let i = 1;i <= 5; i++)
 { 
    starRating.push(<span> {i <= stars ? <img src={Filled}/>: <img src={unfilled}/> }  </span>)
 }
  return starRating;
} 
 

  return(
    
    <div class="carrousel_total_area" >
      
        <div className="bestSeller">
          <h2>Mais vendidos</h2>
            <span ></span>
        </div>

        <Slider className="Slider" {...settings}>
        {teste.map ((item, key) =>(
            <div class="carrousel">
              
              <div className="image_product">
                <img  src={`${item.imageUrl}`} alt="happy" />

                {item.listPrice !== null ?(
                  <div className="off">
                   <p>OFF</p>
                  </div>
                ):('')}
              </div>
              
              
                <div className="info_product">
                  <div className="title">
                      <h3>{item.productName}</h3><br/> 
                  </div>

                  <div className="stars">
                     { starRating(item.stars) }  
                  </div>

                  <div className="listPrice">
                      {formactNumber(item.listPrice)}
                
                  </div>

                  <div className="Price">
                      <h4>por <b>{formactNumber(item.price)}</b></h4>
                  </div>

                  <div className="installments">
                        <p> {( 
                            variavel = item.installments[0] && item.installments[0]  ? (
                              ' ou em  ' + item.installments[0].quantity +
                              'x de ' + (formactNumber(item.installments[0].value))
                                  ) : ('')
                            )} 
                        </p>
                  </div>
                </div>

                <button className="footer_button">
                    <h3>Comprar</h3>
                </button>
            </div>
          ))}  
         </Slider>
    </div>
  )
};