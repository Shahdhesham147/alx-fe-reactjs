import axios from 'axios';

// إعداد رابط الـ API
const BASE_URL = "https://api.github.com/users";

// دالة لجلب بيانات المستخدم من GitHub
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;  // إعادة البيانات
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;  // في حالة حدوث خطأ نرجع null
  }
};
