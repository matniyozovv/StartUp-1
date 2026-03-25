import React, { useState, useEffect } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, onLogin, initialTab = 'login', showNotification }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: ''
  });

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email || !password) {
      showNotification('Iltimos, barcha maydonlarni to\'ldiring!', 'error');
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('studypro_registered_users')) || [];
    const foundUser = registeredUsers.find(user => user.email === email);

    if (foundUser) {
      onLogin({
        name: foundUser.name,
        email: foundUser.email,
        phone: foundUser.phone
      });
    } else {
      const userName = email.split('@')[0];
      const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);
      onLogin({
        name: formattedName,
        email: email,
        phone: "+998901234567"
      });
    }

    showNotification('Muvaffaqiyatli kirdingiz!', 'success');
    setLoginData({ email: '', password: '' });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = registerData;

    if (password !== confirmPassword) {
      showNotification('Parollar mos kelmadi!', 'error');
      return;
    }

    if (password.length < 8) {
      showNotification('Parol kamida 8 ta belgidan iborat bo\'lishi kerak!', 'error');
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('studypro_registered_users')) || [];
    const existingUser = registeredUsers.find(user => user.email === email);

    if (existingUser) {
      showNotification('Bu email allaqachon ro\'yxatdan o\'tgan!', 'error');
      return;
    }

    const newUser = { name, email, phone, password };
    registeredUsers.push(newUser);
    localStorage.setItem('studypro_registered_users', JSON.stringify(registeredUsers));

    onLogin({ name, email, phone });
    showNotification('Ro\'yxatdan muvaffaqiyatli o\'tdingiz!', 'success');
    setRegisterData({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="auth-modal" onClick={handleOverlayClick}>
      <div className="auth-container">
        <div className="auth-left">
          <h2>StudyPro ga Xush Kelibsiz!</h2>
          <p>O'qish uchun mukammal repetitor topish platformasi. Sifatli ta'lim, ishonchli repetitorlar va qulay narxlar.</p>
          <div className="auth-features">
            <div className="auth-feature">
              <i className="fas fa-check-circle"></i>
              <span>100+ tajribali repetitor</span>
            </div>
            <div className="auth-feature">
              <i className="fas fa-check-circle"></i>
              <span>15+ turli fanlar</span>
            </div>
            <div className="auth-feature">
              <i className="fas fa-check-circle"></i>
              <span>Online va offline darslar</span>
            </div>
            <div className="auth-feature">
              <i className="fas fa-check-circle"></i>
              <span>100% ishonchlilik kafolati</span>
            </div>
          </div>
        </div>

        <div className="auth-right">
          <span className="close-auth" onClick={onClose}>&times;</span>
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Kirish
            </button>
            <button
              className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Ro'yxatdan o'tish
            </button>
          </div>

          {activeTab === 'login' ? (
            <form className="auth-form active" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Parol</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Parolingizni kiriting"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Eslab qolish</label>
                </div>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => alert("Parolni tiklash havolasi emailingizga yuborildi")}>
                  Parolni unutdingizmi?
                </button>
              </div>

              <button type="submit" className="btn btn-primary btn-block">Kirish</button>

              <div className="social-auth">
                <p>Yoki ijtimoiy tarmoqlar orqali</p>
                <div className="social-buttons">
                  <button type="button" className="social-btn"><i className="fab fa-telegram"></i></button>
                  <button type="button" className="social-btn"><i className="fab fa-google"></i></button>
                  <button type="button" className="social-btn"><i className="fab fa-facebook-f"></i></button>
                </div>
              </div>
            </form>
          ) : (
            <form className="auth-form active" onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label className="form-label">To'liq ism</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ism familiyangiz"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Telefon raqam</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="+998901234567"
                  value={registerData.phone}
                  onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Parol</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Kamida 8 ta belgi"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Parolni tasdiqlash</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Parolingizni qayta kiriting"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                  <input type="checkbox" id="acceptTerms" required />
                  <label htmlFor="acceptTerms">
                    Men
                    <button
                      type="button"
                      className="text-primary terms-button"
                      onClick={() => {
                        alert(
                          "📜 Foydalanish shartlari:\n\n" +
                          "1. Platformadan to'g'ri va halol foydalaning\n" +
                          "2. Repetitorlar bilan hurmatli munosabatda bo'ling\n" +
                          "3. Darslarni belgilangan vaqtda o'ting\n" +
                          "4. To'lovlarni o'z vaqtida amalga oshiring\n" +
                          "5. Har qanday muammo bo'lsa, qo'llab-quvvatlash xizmatiga murojaat qiling"
                        );
                      }}
                    >
                      foydalanish shartlari
                    </button>
                    bilan tanishdim va rozi bo'ldim
                  </label>
              </div>

              <button type="submit" className="btn btn-accent btn-block">Ro'yxatdan o'tish</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;