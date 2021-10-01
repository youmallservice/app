import React from 'react';

import Card from '../../Components/cards/index'
import Nav from '../../Components/navBar/index'
import Caroussel from '../../Components/caroussel/index'

export default function HomePage() {
    return (
        <>
            <Nav />
            <div id="page-content">
              {/* <Caroussel /> */}
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
        </>
    )
}
