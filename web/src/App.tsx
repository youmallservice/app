import React from 'react';


import './App.css'
import Home from '../src/pages/home/index';
import Shop from '../src/pages/shop/index';

import Nav from  './Components/navBar'
import Footer from  './Components/footer'

function App() {

  return (
    <div className="App">

      <Nav/>
      <div className="page-content">
        <Shop />
      </div>
      <Footer />
    </div>
  );
}

export default App;
