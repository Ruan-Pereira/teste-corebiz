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
    responsive: [
      {
        breakpoint: 1024,
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
             <img className="Image_produto" src={`${item.imageUrl}`} alt="happy" />
             
       <h3>{item.productName}</h3><br/> 

       {/* { starRating(item.stars) }  */}

            
             <h2>{item.listPrice  !== null ? (
               (item.listPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
             ):( <div/>
             )}</h2>

             <h4>por <b>{(item.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</b></h4>

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

                <buttom className="Comprar"> Comprar </buttom>
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