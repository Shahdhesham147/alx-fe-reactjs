// src/githubService.js

const API_URL = 'https://api.github.com/search/users';

export const fetchGitHubUsers = async (query, location, minRepos) => {
    let searchQuery = query ? `q=${query}` : 'q=';
    if (location) {
        searchQuery += `+location:${location}`;
    }
    if (minRepos) {
        searchQuery += `+repos:>=${minRepos}`;
    }

    const url = `${API_URL}?${searchQuery}&per_page=10`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error(error);
        return [];
    }
};
