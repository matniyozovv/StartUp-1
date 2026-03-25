import React, { useEffect } from 'react';
import './UserModal.css';

const UserModal = ({ isOpen, onClose, currentUser, onLogout }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !currentUser) return null;

  const monthsUz = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'];
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} ${monthsUz[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="user-modal" onClick={handleOverlayClick}>
      <div className="user-modal-content">
        <span className="close-user-modal" onClick={onClose}>&times;</span>

        <div className="user-modal-header">
          <div className="user-modal-avatar">
            <span>{currentUser.name?.charAt(0) || 'M'}</span>
          </div>
          <div className="user-header-info">
            <h3>{currentUser.name}</h3>
            <div className="user-modal-status">
              <span className="status-indicator active"></span>
              <span className="status-text">Faol</span>
            </div>
          </div>
        </div>

        <div className="user-modal-body">
          <div className="user-info-grid">
            <div className="info-grid-item">
              <div className="info-icon-small">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content-small">
                <div className="info-label-small">Email</div>
                <div className="info-value-small">{currentUser.email}</div>
              </div>
            </div>

            <div className="info-grid-item">
              <div className="info-icon-small">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content-small">
                <div className="info-label-small">Telefon</div>
                <div className="info-value-small">{currentUser.phone}</div>
              </div>
            </div>

            <div className="info-grid-item">
              <div className="info-icon-small">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="info-content-small">
                <div className="info-label-small">Ro'yxatdan</div>
                <div className="info-value-small">{formattedDate}</div>
              </div>
            </div>

            <div className="info-grid-item">
              <div className="info-icon-small">
                <i className="fas fa-book"></i>
              </div>
              <div className="info-content-small">
                <div className="info-label-small">Darslar</div>
                <div className="info-value-small">12 ta</div>
              </div>
            </div>
          </div>

          <div className="user-stats-compact">
            <div className="stat-compact">
              <div className="stat-icon-compact" style={{ background: 'rgba(52, 152, 219, 0.1)' }}>
                <i className="fas fa-star" style={{ color: '#3498db' }}></i>
              </div>
              <div className="stat-info-compact">
                <div className="stat-number-compact">4.8</div>
                <div className="stat-label-compact">Reyting</div>
              </div>
            </div>

            <div className="stat-compact">
              <div className="stat-icon-compact" style={{ background: 'rgba(46, 204, 113, 0.1)' }}>
                <i className="fas fa-check-circle" style={{ color: '#2ecc71' }}></i>
              </div>
              <div className="stat-info-compact">
                <div className="stat-number-compact">89%</div>
                <div className="stat-label-compact">Muvaffaq</div>
              </div>
            </div>

            <div className="stat-compact">
              <div className="stat-icon-compact" style={{ background: 'rgba(155, 89, 182, 0.1)' }}>
                <i className="fas fa-clock" style={{ color: '#9b59b6' }}></i>
              </div>
              <div className="stat-info-compact">
                <div className="stat-number-compact">48</div>
                <div className="stat-label-compact">Soat</div>
              </div>
            </div>
          </div>
        </div>

        <div className="user-modal-footer">
          <button className="btn btn-outline btn-small" onClick={() => {
            onClose();
            setTimeout(() => alert('Profil tahrirlash funksiyasi yaqinda qoʻshiladi!'), 300);
          }}>
            <i className="fas fa-edit"></i> Tahrirlash
          </button>
          <button className="btn btn-danger btn-small" onClick={onLogout}>
            <i className="fas fa-sign-out-alt"></i> Chiqish
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;