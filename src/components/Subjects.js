import React from 'react';
import './Subjects.css';

const subjectsData = [
  { id: 1, name: "Matematika", icon: "fas fa-calculator", price: "300000", period: "to'lov", desc: "Algebra, geometriya, hisoblash" },
  { id: 2, name: "Fizika", icon: "fas fa-atom", price: "350000", period: "to'lov", desc: "Mexanika, termodinamika, elektromagnetizm" },
  { id: 3, name: "Kimyo", icon: "fas fa-vial", price: "400000", period: "to'lov", desc: "Organik, noorganik, fizik kimyo" },
  { id: 4, name: "Ingliz tili", icon: "fas fa-language", price: "400000", period: "to'lov", desc: "Grammatika, nutq, yozuv" },
  { id: 5, name: "Dasturlash", icon: "fas fa-code", price: "700000", period: "to'lov", desc: "JavaScript, Python, Web dasturlash" },
  { id: 6, name: "Biologiya", icon: "fas fa-dna", price: "400000", period: "to'lov", desc: "Anatomiya, genetika, ekologiya" },
  { id: 7, name: "Tarix", icon: "fas fa-landmark", price: "200000", period: "to'lov", desc: "Jahon tarixi, O'zbekiston tarixi" },
  { id: 8, name: "Rus tili", icon: "fas fa-book", price: "100000", period: "to'lov", desc: "Grammatika, nutq, yozuv" }
];

const Subjects = ({ onSubjectClick, searchFilters }) => {
  // Filtrlash funksiyasi
  const filteredSubjects = subjectsData.filter(subject => {
    const matchesSearch = searchFilters.searchTerm === '' ||
      subject.name.toLowerCase().includes(searchFilters.searchTerm.toLowerCase()) ||
      subject.desc.toLowerCase().includes(searchFilters.searchTerm.toLowerCase());

    // Narx bo'yicha filtr
    let matchesPrice = true;
    const priceNum = parseInt(subject.price);
    if (searchFilters.price === 'cheap') {
      matchesPrice = priceNum <= 150000;
    } else if (searchFilters.price === 'medium') {
      matchesPrice = priceNum >= 300000 && priceNum <= 450000;
    } else if (searchFilters.price === 'expensive') {
      matchesPrice = priceNum >= 450000;
    }

    return matchesSearch && matchesPrice;
  });

  if (filteredSubjects.length === 0) {
    return (
      <section className="subjects" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fanlar va Narxlar</h2>
            <p className="section-subtitle">Turli fanlar bo'yicha professional repetitorlar bilan tanishing</p>
          </div>
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>Hech qanday fan topilmadi</h3>
            <p>Qidiruv so'rovingizga mos keladigan fan mavjud emas</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="subjects" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fanlar va Narxlar</h2>
          <p className="section-subtitle">Turli fanlar bo'yicha professional repetitorlar bilan tanishing</p>
        </div>

        <div className="subjects-grid">
          {filteredSubjects.map(subject => (
            <div
              key={subject.id}
              className="subject-card fade-in"
              onClick={() => onSubjectClick(subject)}
            >
              <div className="subject-icon">
                <i className={subject.icon}></i>
              </div>
              <h3 className="subject-title">{subject.name}</h3>
              <p className="subject-desc">{subject.desc}</p>
              <div className="subject-price">{parseInt(subject.price).toLocaleString()} UZS</div>
              <div className="subject-period">{subject.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;