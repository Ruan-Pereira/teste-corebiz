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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:4,
    adaptiveHeight: false,
    responsive: [
     
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
    
      
    ]
  };

let variavel = '';

/* const starRating = (item) => {
  let i = 1
  for (i; i <= 5; i++) {
    if(item > i) {
      return(
        console.log(item)
      )
    } else {
     return(
      <img src={Negativo}/>
     )
    }
}
 
} */


  return(
    
    <Slider {...settings}>
      
       {teste.map ((item, key) =>(
          <div class="carrousel">
             <div className="Produto">
              <img className="Image_produto" src={`${item.imageUrl}`} alt="happy" />
             </div>
             
            <div className="title">
              <h3>{item.productName}</h3><br/> 
            </div>

       {/* { starRating(item.stars) }  */}
            <div className="listPrice">
              <h2>{item.listPrice  !== null ? (
                (item.listPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
              ):( ''
              )}</h2>
            </div>

             <div className="Price">
              <h4>por <b>{(item.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</b></h4>
             </div>

             <div className="installments">
             <p> {( 
                variavel = item.installments[0] && item.installments[0]  ? (
                  ' ou em  ' +
                  item.installments[0].quantity +

                  'x de ' +
                      (item.installments[0].value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
                  ) : (
                    <div className="instalments" />
                  )
                )} </p>
             </div>

                <div className="Comprar"> <h4>Comprar</h4> </div>
          </div>
         ))} 
        
    </Slider>
  )
};
































/* import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Api from './Api'

export default () => {
       



 const [Produtos, setProdutos ] = useState([]);
  useEffect(() => {
    const loadproducts = async() => {
      
      let list = await Api.getprodutos();
      setProdutos(list)
    }
    loadproducts();
  }, []);



console.log(Produtos)

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div>
      <section>
        {Produtos.map((item,key) =>{
          <div key={key}>
            {}
          </div>
        })}
      </section>
    </div>
  );
} */