// src/github.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const getUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
