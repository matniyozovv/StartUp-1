import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import Subjects from './components/Subjects';
import Tutors from './components/Tutors';
import AuthModal from './components/AuthModal';
import BookingModal from './components/BookingModal';
import UserModal from './components/UserModal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Qidiruv uchun state'lar
  const [searchFilters, setSearchFilters] = useState({
    searchTerm: '',
    city: '',
    price: ''
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('studypro_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('studypro_user', JSON.stringify(userData));
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    if (window.confirm(`${currentUser?.name}, rostdan ham hisobdan chiqmoqchimisiz?`)) {
      setCurrentUser(null);
      localStorage.removeItem('studypro_user');
      setShowUserModal(false);
      showNotification('Muvaffaqiyatli chiqdingiz!', 'success');
    }
  };

  const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      z-index: 9999;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  const openBookingModal = (tutor = null, subject = null) => {
    if (!currentUser) {
      setAuthTab('login');
      setShowAuthModal(true);
      return;
    }
    setSelectedTutor(tutor);
    setSelectedSubject(subject);
    setShowBookingModal(true);
  };

  // Qidiruv funksiyasi
  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        onLoginClick={() => {
          setAuthTab('login');
          setShowAuthModal(true);
        }}
        onRegisterClick={() => {
          setAuthTab('register');
          setShowAuthModal(true);
        }}
        onUserClick={() => setShowUserModal(true)}
        onLogout={handleLogout}
      />

      <Hero />

      <SearchSection onSearch={handleSearch} />

      <Subjects
        onSubjectClick={(subject) => openBookingModal(null, subject)}
        searchFilters={searchFilters}
      />

      <Tutors
        onTutorBook={(tutor) => openBookingModal(tutor, null)}
        searchFilters={searchFilters}
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
        initialTab={authTab}
        showNotification={showNotification}
      />

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        currentUser={currentUser}
        selectedTutor={selectedTutor}
        selectedSubject={selectedSubject}
        showNotification={showNotification}
      />

      <UserModal
        isOpen={showUserModal}
        onClose={() => setShowUserModal(false)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <Footer />
    </div>
  );
}

export default App;