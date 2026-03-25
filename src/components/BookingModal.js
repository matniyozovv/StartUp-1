import React, { useState, useEffect } from 'react';
import './BookingModal.css';

const subjectsData = [
  "Matematika", "Fizika", "Kimyo", "Ingliz tili", "Dasturlash", "Biologiya", "Tarix", "Rus tili"
];

const tutorsData = [
  "Azizbek Ismoilov - Matematika", "Sevara Karimova - Ingliz tili", "Javohir Rustamov - Dasturlash",
  "Dilnoza Xolmirzayeva - Fizika", "Farhod Abdullayev - Kimyo", "Madina Yusupova - Biologiya",
  "Bekzod Xo'jayev - Tarix", "Zarina Qodirova - Rus tili"
];

const BookingModal = ({ isOpen, onClose, currentUser, selectedTutor, selectedSubject, showNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    tutor: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      const today = new Date().toISOString().split('T')[0];
      setFormData({
        name: currentUser.name || '',
        phone: currentUser.phone || '',
        subject: selectedSubject?.name || '',
        tutor: selectedTutor?.name ? `${selectedTutor.name} - ${selectedTutor.subject}` : '',
        date: today,
        time: ''
      });
    }
  }, [isOpen, currentUser, selectedTutor, selectedSubject]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, subject, tutor, date, time } = formData;

    if (!name || !phone || !subject || !tutor || !date || !time) {
      showNotification('Iltimos, barcha maydonlarni to\'ldiring!', 'error');
      return;
    }

    const telegramMessage = `Yangi bron:\nIsm: ${name}\nTelefon: ${phone}\nFan: ${subject}\nRepetitor: ${tutor}\nSana: ${date}\nVaqt: ${time}`;
    showNotification(`Bron qilindi!\n${tutor.split(' - ')[0]} repetitori siz bilan ${date} kuni ${time} da bog'lanadi.`, 'success');
    console.log(telegramMessage);

    onClose();
    setFormData({ ...formData, time: '' });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="booking-modal" onClick={handleOverlayClick}>
      <div className="booking-content">
        <span className="close-booking" onClick={onClose}>&times;</span>
        <h3 className="mb-30">Darsni bron qilish</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Ismingiz</label>
            <input
              type="text"
              className="form-control"
              placeholder="To'liq ismingiz"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Telefon raqamingiz</label>
            <input
              type="tel"
              className="form-control"
              placeholder="+998901234567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Fan</label>
            <select
              className="form-control"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            >
              <option value="">Fanni tanlang</option>
              {subjectsData.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Repetitor</label>
            <select
              className="form-control"
              value={formData.tutor}
              onChange={(e) => setFormData({ ...formData, tutor: e.target.value })}
              required
            >
              <option value="">Repetitorni tanlang</option>
              {tutorsData.map(tutor => (
                <option key={tutor} value={tutor}>{tutor}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Dars sanasi</label>
            <input
              type="date"
              className="form-control"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Dars vaqti</label>
            <select
              className="form-control"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
            >
              <option value="">Vaqtni tanlang</option>
              <option value="08:00">08:00 - 09:00</option>
              <option value="09:00">09:00 - 10:00</option>
              <option value="10:00">10:00 - 11:00</option>
              <option value="11:00">11:00 - 12:00</option>
              <option value="14:00">14:00 - 15:00</option>
              <option value="15:00">15:00 - 16:00</option>
              <option value="16:00">16:00 - 17:00</option>
              <option value="17:00">17:00 - 18:00</option>
              <option value="18:00">18:00 - 19:00</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Bron qilish</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;