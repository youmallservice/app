import React from "react";
import Photo from '../../assets/images/product-images/product_image23.jpg';

export default function ProductCard() {
  return (
    <div className="col-6 col-sm-2 col-md-3 col-lg-3 item">
                            <div className="product-image">
                                <a href="#" className="grid-view-item__link">
                                    <img className="primary blur-up lazyload" data-src={Photo} src={Photo} alt="image" title="product"/>
                                    <img className="grid-view-item__image hover variantImg" src={Photo} alt="image" title="product"/>
                                </a>
                                <form className="variants add" action="#" method="post">
                                    <button className="btn btn-addto-cart" type="button">Select Options</button>
                                </form>
                            </div>
                            <div className="product-details text-center">
                                <div className="product-name">
                                    <a href="product-layout-1.html">Vestido longo Preto</a>
                                </div>
                                <div className="product-price">
                                    <span className="price">R$748.00</span>
                                </div>
                            </div>
                        </div>
  );
}
