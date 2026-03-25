import React from 'react';
import './Header.css';

const Header = ({ currentUser, onLoginClick, onRegisterClick, onUserClick, onLogout }) => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="/" className="logo">
            <i className="fas fa-graduation-cap"></i>
            <span className="logo-text">StudyPro</span>
          </a>

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
                <div className="logout-btn" onClick={(e) => {
                  e.stopPropagation();
                  onLogout();
                }}>
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

          <div className="menu-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;