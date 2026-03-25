import React, { useState } from 'react';
import './Header.css';

const Header = ({ currentUser, onLoginClick, onRegisterClick, onUserClick, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="/" className="logo">
            <i className="fas fa-graduation-cap"></i>
            <span className="logo-text">StudyPro</span>
          </a>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>

          <div className="nav-links">
            <a href="#home" className="active">Bosh sahifa</a>
            <a href="#pricing">Narxlar</a>
            <a href="#tutors">Repetitorlar</a>
            <a href="#contact">Aloqa</a>
          </div>

          <div className="header-buttons">
            {currentUser ? (
              <div className="user-profile" onClick={onUserClick}>
                <div className="user-avatar">{currentUser.name.charAt(0)}</div>
                <div className="user-name">{currentUser.name}</div>
                <div
                  className="logout-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onLogout();
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </div>
              </div>
            ) : (
              <>
                <button className="btn btn-outline" onClick={onLoginClick}>Kirish</button>
                <button className="btn btn-primary" onClick={onRegisterClick}>Ro'yxatdan o'tish</button>
              </>
            )}
          </div>
        </nav>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Bosh sahifa</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Narxlar</a>
          <a href="#tutors" onClick={() => setMenuOpen(false)}>Repetitorlar</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Aloqa</a>
        </div>
      </div>
    </header>
  );
};

export default Header;