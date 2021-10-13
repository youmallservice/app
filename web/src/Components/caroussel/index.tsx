import React from 'react';

import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Image from '../../assets/images/slideshow-banners/home2-default-banner1.jpg'
import Image2 from '../../assets/images/slideshow-banners/home2-default-banner2.jpg'

export default function Caroussel() {
  return (
    <div>
      <Swiper
        navigation
        autoplay
      >
        <SwiperSlide>
          <div className="slideshow slideshow-wrapper pb-section">
            <div className="home-slideshow slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track" >
                  <div className="slick-slide" data-slick-index="0" aria-hidden="true">
                    <div>
                      <div className="slide" >
                        <div className="blur-up lazyloaded">
                          <img className="blur-up ls-is-cached lazyloaded" data-src={Image} src={Image} alt="Shop Our New Collection" title="Shop Our New Collection" />
                          <div className="slideshow__text-wrap slideshow__overlay classic middle">
                            <div className="slideshow__text-content middle">
                              <div className="container">
                                <div className="wrap-caption right">
                                  <h2 className="h1 mega-title slideshow__title">Our New Collection</h2>
                                  <span className="mega-subtitle slideshow__subtitle">Save up to 50% Off</span>
                                  <span className="btn">Shop now</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blur-up lazyload">
            <img className="blur-up lazyload" data-src={Image2} src={Image2} alt="Shop Our New Collection" title="Shop Our New Collection" />
            <div className="slideshow__text-wrap slideshow__overlay classic middle">
              <div className="slideshow__text-content middle">
                <div className="container">
                  <div className="wrap-caption right">
                    <h2 className="h1 mega-title slideshow__title">Our New Collection</h2>
                    <span className="mega-subtitle slideshow__subtitle">Save up to 50% Off</span>
                    <span className="btn">Shop now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
