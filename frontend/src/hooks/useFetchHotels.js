import { useEffect, useState } from "react";
import axios from "axios";

const useFetchHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/Hotel`
        );
        // setHotels(res.data);
        console.log("Dữ liệu nhận được:", res.data);
        console.log("Kiểu dữ liệu:", typeof res.data);
        console.log("Có phải mảng không:", Array.isArray(res.data));
        if (typeof res.data === "string") {
          try {
            const parsed = JSON.parse(res.data);
            console.log("Dữ liệu JSON.parse:", parsed);
            setHotels(parsed);
          } catch (e) {
            console.error("Không parse được JSON:", e);
            setHotels([]); // fallback
          }
        } else {
          setHotels(res.data);
        }
      } catch (err) {
        console.error("Lỗi khi lấy danh sách khách sạn:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);
  return { hotels, loading };
};
export default useFetchHotel;
