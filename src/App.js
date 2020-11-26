import React from 'react';
import './App.css';
import Menu from './components/menu_top';
import Banner from './components/banner';
import Carrousel from './components/carrousel';
import Formulario from './components/formulario';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Menu   />
      <Banner />
     {/*  <Carrousel />
      <Formulario   />
      <Footer />  */}
   </div>
  );
}

export default App;
