import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>O'qishda muvaffaqiyat sari birinchi qadam</h1>
          <p>StudyPro platformasi orqali tajribali repetitorlardan sifatli ta'lim oling. Bizning repetitorlarimiz yordamida istalgan fandan yuqori natijalarga erishing.</p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Repetitor</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Fanlar</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Muvaffaqiyatli o'quvchi</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90%</div>
              <div className="stat-label">Mamnun mijozlar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;