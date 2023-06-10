import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="SearchBar-form" onSubmit={handleSubmit}>
      <input
        className="SearchBar-input"
        type="text"
        placeholder="Search by ID or address.."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="SearchBar-button" type="submit">
        <AiOutlineSearch />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
