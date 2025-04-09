
// App.jsx
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🍽️ Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Search from "./Search";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onResult={setUser} />

      {user && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>@{user.login}</p>
          <img src={user.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full mt-2" />
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
};

export default App;
{user && (
  <div className="mt-6">
    <h2 className="text-xl font-bold">{user.name}</h2>
    <p>@{user.login}</p>
    <img src={user.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full mt-2" />
    <p>{user.bio}</p>
    <div className="mt-2">
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Repos: {user.public_repos}</p>
    </div>
  </div>
)}

