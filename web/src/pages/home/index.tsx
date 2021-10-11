import React from 'react';

import Card from '../../Components/cards/index'
import Nav from '../../Components/navBar/index'
import Caroussel from '../../Components/caroussel'
import Footer from '../../Components/footer'

import Photo from '../../assets/images/slideshow-banners/home2-default-banner1.jpg'
import Photo2 from '../../assets/images/slideshow-banners/home2-default-banner2.jpg'

export default function HomePage() {
    return (
        <>
            <Nav />
            <div id="page-content">
              <Caroussel />
                <div className="product-rows section">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                          <h2 className="h2">Populares</h2>
                          <p>Produtos mais vistos pelos usuários</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid-products">
                      <div className="row">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
