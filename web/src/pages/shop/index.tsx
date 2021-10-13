import React from 'react'

import Card from '../../Components/cards'
import PhotoHeaderShop from '../../assets/images/cat-women.jpg'

export default function Shop(){
  return(
    <div>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image">
            <img className="blur-up lazyload" data-src={PhotoHeaderShop} src={PhotoHeaderShop} alt="Women" title="Women" />
          </div>
          <div className="collection-hero__title-wrapper">
            <h1 className="collection-hero__title page-width">Loja</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
            <div className="closeFilter d-block d-md-none d-lg-none"><i className="icon icon anm anm-times-l"></i></div>
            <div className="sidebar_tags">
              <div className="sidebar_widget categories filter-widget">
                <div className="widget-title"><h2>Categorias</h2></div>
                <div className="widget-content">
                  <ul className="sidebar_categories">
                    <li className="level1"><a href="#;" className="site-nav">Camisas</a>
                    </li>
                    <li className="level1"><a href="#;" className="site-nav">Sapatos</a>
                    </li>
                    <li className="lvl-1"><a href="#;" className="site-nav">Shorts</a></li>
                    <li className="lvl-1"><a href="#;" className="site-nav">Óculos</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
