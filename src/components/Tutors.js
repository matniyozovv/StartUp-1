import React from 'react';
import './Tutors.css';

const tutorsData = [
  { id: 1, name: "Azizbek Ismoilov", subject: "Matematika", rating: 4.9, price: "300000", exp: "5 yil", desc: "Matematikadan oliy ma'lumotli", telegram: "@azizbek_math", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Sevara Karimova", subject: "Ingliz tili", rating: 4.8, price: "400000", exp: "7 yil", desc: "IELTS 8.5 sohibasi, tajribali o'qituvchi", telegram: "@sevara_english", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Javohir Rustamov", subject: "Dasturlash", rating: 4.9, price: "700000", exp: "6 yil", desc: "Senior dasturchi, 10+ loyiha tajribasi", telegram: "@javohir_dev", img: "https://randomuser.me/api/portraits/men/67.jpg" },
  { id: 4, name: "Dilnoza Xolmirzayeva", subject: "Fizika", rating: 4.7, price: "350000", exp: "4 yil", desc: "Fizika Fani ustozi, universitet o'qituvchisi", telegram: "@dilnoza_physics", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Farhod Abdullayev", subject: "Kimyo", rating: 4.8, price: "400000", exp: "8 yil", desc: "Kimyo fanlari doktori, 100+ o'quvchi", telegram: "@farhod_chemistry", img: "https://randomuser.me/api/portraits/men/75.jpg" },
  { id: 6, name: "Madina Yusupova", subject: "Biologiya", rating: 4.6, price: "400000", exp: "5 yil", desc: "Tibbiyot universiteti o'qituvchisi", telegram: "@madina_biology", img: "https://randomuser.me/api/portraits/women/26.jpg" },
  { id: 7, name: "Bekzod Xo'jayev", subject: "Tarix", rating: 4.5, price: "200000", exp: "10 yil", desc: "Tarix fani ustoz, 3 ta kitob muallifi", telegram: "@bekzod_history", img: "https://randomuser.me/api/portraits/men/55.jpg" },
  { id: 8, name: "Zarina Qodirova", subject: "Rus tili", rating: 4.7, price: "100000", exp: "6 yil", desc: "Rus tili mutaxassisi, tarjimon", telegram: "@zarina_russian", img: "https://randomuser.me/api/portraits/women/33.jpg" }
];

const Tutors = ({ onTutorBook, searchFilters }) => {
  // Filtrlash funksiyasi
  const filteredTutors = tutorsData.filter(tutor => {
    // Matn bo'yicha qidiruv
    const matchesSearch = searchFilters.searchTerm === '' ||
      tutor.name.toLowerCase().includes(searchFilters.searchTerm.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchFilters.searchTerm.toLowerCase()) ||
      tutor.desc.toLowerCase().includes(searchFilters.searchTerm.toLowerCase());

    // Narx bo'yicha filtr
    let matchesPrice = true;
    const priceNum = parseInt(tutor.price);
    if (searchFilters.price === 'cheap') {
      matchesPrice = priceNum <= 150000;
    } else if (searchFilters.price === 'medium') {
      matchesPrice = priceNum >= 300000 && priceNum <= 450000;
    } else if (searchFilters.price === 'expensive') {
      matchesPrice = priceNum >= 450000;
    }

    return matchesSearch && matchesPrice;
  });

  const handleTelegram = (telegram) => {
    window.open(`https://t.me/${telegram.substring(1)}`, '_blank');
  };

  if (filteredTutors.length === 0) {
    return (
      <section className="tutors" id="tutors">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tajribali Repetitorlar</h2>
            <p className="section-subtitle">Bizning eng yaxshi repetitorlarimiz bilan tanishing</p>
          </div>
          <div className="no-results">
            <i className="fas fa-user-graduate"></i>
            <h3>Repetitor topilmadi</h3>
            <p>Qidiruv so'rovingizga mos keladigan repetitor mavjud emas</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="tutors" id="tutors">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tajribali Repetitorlar</h2>
          <p className="section-subtitle">Bizning eng yaxshi repetitorlarimiz bilan tanishing</p>
        </div>

        <div className="tutors-grid">
          {filteredTutors.map(tutor => (
            <div key={tutor.id} className="tutor-card-new fade-in">
              <div className="tutor-card-header">
                <div className="tutor-header-left">
                  <div className="tutor-avatar-new">
                    <img src={tutor.img} alt={tutor.name} />
                  </div>
                  <div className="tutor-basic-info">
                    <h3 className="tutor-name-new">{tutor.name}</h3>
                    <div className="tutor-subject-new">{tutor.subject}</div>
                    <div className="tutor-rating-new">
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <div className="stars-fill" style={{ width: `${tutor.rating * 20}%` }}>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                      <span className="rating-number">{tutor.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tutor-card-body">
                <div className="tutor-info-item">
                  <i className="fas fa-briefcase"></i>
                  <span className="info-text"><strong>Tajriba:</strong> {tutor.exp}</span>
                </div>
                <div className="tutor-info-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span className="info-text">{tutor.desc}</span>
                </div>
                <div className="tutor-info-item">
                  <i className="fab fa-telegram"></i>
                  <span className="info-text"><strong>Telegram:</strong> {tutor.telegram}</span>
                </div>
              </div>

              <div className="tutor-card-footer">
                <div className="tutor-price-new">
                  <div className="price-amount-new">{parseInt(tutor.price).toLocaleString()} UZS</div>
                  <div className="price-period-new">soatiga</div>
                </div>
                <div className="tutor-actions-new">
                  <button
                    className="btn btn-telegram"
                    onClick={() => handleTelegram(tutor.telegram)}
                  >
                    <i className="fab fa-telegram"></i> Telegram
                  </button>
                  <button
                    className="btn btn-book"
                    onClick={() => onTutorBook(tutor)}
                  >
                    <i className="fas fa-calendar-plus"></i> Bron qilish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutors;