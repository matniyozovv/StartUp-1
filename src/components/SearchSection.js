import React, { useState, useEffect } from 'react';
import './SearchSection.css';

const SearchSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');

  // Har bir harf yozilganda avtomatik qidiruv
  useEffect(() => {
    onSearch({ searchTerm, city, price });
  }, [searchTerm, city, price, onSearch]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-box">
          <div className="search-input-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Qidiring... "
              value={searchTerm}
              onChange={handleSearchTermChange}
              autoFocus
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm('')}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
          <select className="search-select" value={city} onChange={handleCityChange}>
            <option value="">Barcha shaharlar</option>
            <option value="tashkent">Toshkent</option>
            <option value="samarkand">Samarqand</option>
            <option value="online">Online</option>
          </select>
          <select className="search-select" value={price} onChange={handlePriceChange}>
            <option value="">Barcha narxlar</option>
            <option value="cheap">150,000 UZS gacha</option>
            <option value="medium">300,000 - 450,000 UZS</option>
            <option value="expensive">450,000 UZS dan yuqori</option>
          </select>
        </div>


      </div>
    </section>
  );
};

export default SearchSection;