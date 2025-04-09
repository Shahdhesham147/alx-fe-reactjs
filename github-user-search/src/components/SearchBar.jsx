import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    if (username) {
      onSearch(username);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ابحث عن مستخدم GitHub"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>بحث</button>
    </div>
  );
};

export default SearchBar;
