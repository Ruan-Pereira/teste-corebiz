import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Api from './Api'


export default () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll:2
  };

const [teste, setProdutos ] = useState([]);

useEffect(() => {
  const loadproducts = async() => {
    
    let list = await Api.getprodutos();
    setProdutos(list[0].Array_products)
    

  }
  loadproducts();


}, []);

  
  return(
    <Slider {...settings}>
   
       {teste.map ((item, key) =>(
          <div>
             <img src={`${item.imageUrl}`} alt="happy" />
             {item.productName}
             <h1>por <b>{(item.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</b></h1>
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