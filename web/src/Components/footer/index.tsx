import React from 'react'
import './styles.css'

export default function Footer(){
  return(
    <div>
      <footer id="footer" className="footer">
        <div className="site-footer">
          <div className="container">
            {/* Footer Links */}
            <div className="footer-top">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <div className="column">
                    <h4 className="h4">Redes Sociais</h4>
                    <ul className="list--inline site-footer__social-icons social-icons">
                      <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Facebook"><i className="icon icon-facebook"></i>Facebook</a></li>
                      <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Twitter"><i className="icon icon-twitter"></i>Twitter</a></li>
                      <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Instagram"><i className="icon icon-instagram"></i>Instagram</a></li>
                  </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 className="h4">Links</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Loja</a></li>
                    <li><a href="#">Sobre</a></li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                  <h4 className="h4">Contato</h4>
                  <ul className="addressFooter">
                    <li><i className="icon anm anm-map-marker-al"></i><p>55 Gallaxy Enque,<br/>2568 steet, 23568 NY</p></li>
                    <li className="phone"><i className="icon anm anm-phone-s"></i><p>(440) 000 000 0000</p></li>
                    <li className="email"><i className="icon anm anm-envelope-l"></i><p>sales@yousite.com</p></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Footer Links */}
          </div>
        </div>
      </footer>
    </div>
  );
}
