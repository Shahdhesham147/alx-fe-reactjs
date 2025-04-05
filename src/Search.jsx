// src/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "./services/githubService"; // التأكد من أنك قمت بإنشاء هذه الدالة في githubService.js

const Search = ({ onResult }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج
    if (!username) return; // التأكد من أنه تم إدخال اسم المستخدم

    setLoading(true);
    setError(null); // مسح أي خطأ سابق

    try
