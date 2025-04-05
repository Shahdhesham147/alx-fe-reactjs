import React, { useState } from "react";
import { getUserData } from "./services/github";  // تأكد من المسار الصحيح

const Search = ({ onResult }) => {
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    if (!username.trim()) return;  // لو مفيش username مكتوب متعملش سيرش

    const data = await getUserData(username);  // استدعاء الدالة من github.js
    onResult(data);  // إرسال النتيجة للـ App component
    setUsername("");  // مسح الـ input بعد البحث
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default Search;
