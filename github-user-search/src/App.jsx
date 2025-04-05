import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <h1>بحث عن مستخدم GitHub</h1>
      <SearchBar onSearch={handleSearch} />
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            زيارة الملف الشخصي على GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
