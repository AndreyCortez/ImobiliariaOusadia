import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import './SearchHouses.css';

const SearchHouses = () => {
  return (
    <div className="search-houses-container">
     
      <div className="search-input-container">
        <div className="buy-button">
            <button>BUY</button>
        </div>
        <input type="text" className="search-input" placeholder="Find your property" />
        <button className="search-button">
          <FiSearch />
        </button>
      </div>
      <div className="filters-button">
        <FiFilter />
        FILTERS
      </div>

    </div>
  );
};

export default SearchHouses;
