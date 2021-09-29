import React from "react";
import Photo from '../../assets/images/product-images/product_image23.jpg';

export default function ProductCard() {
  return (

      <div className="col-6 col-sm-2 col-md-3 col-lg-3 item">
        <div className="product-image">
          <a className="grid-view-item__link" href="#">
            <img
              className="grid-view-item__image hover variantImg"
              src={Photo}
              data-src={Photo}
              alt="Foto do produto"
              title="product"
            />
          </a>
          <form className="variants add" action="#" method="post">
            <button className="btn btn-addto-cart" type="button">
              Add To Cart
            </button>
          </form>
        </div>
        <div className="product-details text-center">
          <div className="product-name">
            <a href="product-layout-1.html">3/4 Sleeve Kimono Dress</a>
          </div>
          <div className="product-price">
            <span className="price">$550.00</span>
          </div>
        </div>
      </div>
  );
}
