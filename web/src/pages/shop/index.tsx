import React from 'react'

import Card from '../../Components/cards'
import PhotoHeaderShop from '../../assets/images/cat-women.jpg'

import './styles.css'

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


            <div className="display-table">
              <div className="display-table-cell ">
                <form action="#" method="post" className="searchContainer">
                  <div className="input-group-search-product">
                    <input type="text" className="input-group__field newsletter__input" name="SEARCH" value="" placeholder="nome do produto" />
                    <span className="input-group__btn">
                      <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe"><span className="newsletter__submit-text--large">Buscar</span></button>
                    </span>
                  </div>
                </form>
              </div>
            </div>


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
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
          <div className="grid-products grid--view-items">
            <div className="row">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
          <hr className="clear"/>
            <div className="pagination">
              <ul>
                <li className="active"><a href="#">1</a></li>
                <li ><a href="#">2</a></li>
                <li className="next"><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i></a></li>
              </ul>
            </div>
      </div>
        </div>
      </div>
    </div>
  )
}
