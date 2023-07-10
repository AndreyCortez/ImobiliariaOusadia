import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import './SearchHouses.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const SearchHouses = ({ houses, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    city: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    garage: '',
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOptions({ ...filterOptions, [event.target.name]: event.target.value });
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    setShowFilterPopup(false);
    const filtered = houses.filter((house) => {
      const { city, address, bedrooms, bathrooms, garage } = filterOptions;

      return (
        house.city.toUpperCase().includes(city.toUpperCase()) &&
        house.address.toUpperCase().includes(address.toUpperCase()) &&
        (bedrooms === '' || house.bedrooms === parseInt(bedrooms)) &&
        (bathrooms === '' || house.bathrooms === parseInt(bathrooms)) &&
        (garage === '' || house.garage === parseInt(garage))
      );
    });

    onFilter(filtered);
  };

  return (
    <div className="search-houses-container">
      <div className="search-input-container">
        <div className="buy-button">
          <button>BUY</button>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Find your property"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button">
          <FiSearch />
        </button>
      </div>
      <div className="filters-button" onClick={() => setShowFilterPopup(true)}>
        <FiFilter />
      </div>

      <Popup
        position="right center"
        open={showFilterPopup}
        onClose={() => setShowFilterPopup(false)}
      >
        <form className="filter-form" onSubmit={handleFilterSubmit}>
          <h3>Filter Houses</h3>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={filterOptions.city}
            onChange={handleFilterChange}
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={filterOptions.address}
            onChange={handleFilterChange}
          />

          <label htmlFor="bedrooms">Number of Bedrooms:</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={filterOptions.bedrooms}
            onChange={handleFilterChange}
          />

          <label htmlFor="bathrooms">Number of Bathrooms:</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={filterOptions.bathrooms}
            onChange={handleFilterChange}
          />

          <label htmlFor="garage">Number of Garage Spaces:</label>
          <input
            type="number"
            id="garage"
            name="garage"
            value={filterOptions.garage}
            onChange={handleFilterChange}
          />

          <button type="submit">Apply Filters</button>
        </form>
      </Popup>
    </div>
  );
};

export default SearchHouses;
