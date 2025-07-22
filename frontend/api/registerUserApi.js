import axios from "axios";

export const registerUser = async(userData)=>{
    try{
        const res = await axios.post( `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,userData );
        return res.data;
    }catch(err)
    {
        throw err.res?.data||"Đã có lỗi xảy ra";
    }
}