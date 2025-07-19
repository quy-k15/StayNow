import axios from "axios";



export const createHotel = async (FormData) => {
  try {
    const res = await axios.post( `${import.meta.env.VITE_API_BASE_URL}/api/Hotel`, FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert("Ảnh đã upload: " + res.data.imageUrl);
    return res.data;
  } catch (error) {
    console.error("Lỗi upload", error);
    throw error; 
  }
};
