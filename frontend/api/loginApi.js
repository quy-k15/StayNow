import axios from "axios";

export const loginApi = async(userData)=>{
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, userData);
        return res.data;
    }catch(err)
    {
        console.log(err);
    }

}