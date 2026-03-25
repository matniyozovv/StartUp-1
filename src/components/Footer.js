import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>StudyPro</h3>
            <p>O'zbekistondagi eng yirik repetitorlar platformasi. <br /> Sifatli ta'lim - kelajagingiz kafolati.</p>
            <div className="social-links">
              <a href="https://t.me/matniyozovv_m" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://www.instagram.com/l7.matniyozovv/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 id="contact">Biz bilan aloqa</h3>
            <ul className="footer-links">
              <li><a href="tel:+998914373133"><i className="fas fa-phone"></i> +998 91 437 31 33</a></li>
              <li><a href="mailto:info@studypro.uz"><i className="fas fa-envelope"></i> studypro.uz@gmail.com</a></li>
              <li><a href="https://t.me/StudyPro1_uz_bot" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i> StudyPro | Xiva | Kurslar</a></li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=IT+Park,+Xiva,+Xorazm+viloyati,+Uzbekistan" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-map-marker-alt"></i> Xiva shahar, IT Park
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Tezkor havolalar</h3>
            <ul className="footer-links">
              <li><a href="#home"><i className="fas fa-chevron-right"></i> Bosh sahifa</a></li>
              <li><a href="#tutors"><i className="fas fa-chevron-right"></i> Repetitorlar</a></li>
              <li><a href="#pricing"><i className="fas fa-chevron-right"></i> Narxlar</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2026 Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;