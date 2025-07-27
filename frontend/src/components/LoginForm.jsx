// import React, {useState} from "react";
// import { loginApi } from "../../api/LoginApi";

// const LoginForm=()=>{
//     const [formData, setFormDate]=useState({
//         emailOrPhone:'',
//         password:''
//     });

//     const handleChange=(e)=>{
//         setFormDate({...formData, [e.target.name]:e.target.value});

//     }
//     const handleSubmit =async(e)=>{
//         e.preventDefault();
//         if(!formData.emailOrPhone || !formData.password)
//         {
//              alert("Vui lòng điền đầy đủ thông tin!");
//             return;
//         }
//         //check email or phone format
//         const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const phoneRegex= /^0\d{9}$/;

//         if(!emailRegex.test[formData.emailOrPhone]&&!phoneRegex.test[formData.emailOrPhone]){
//              alert("Email hoặc số điện thoại không hợp lệ!");
//             return;
//         }
//         try{
//             const data = await loginApi(formData);
//             alert(data.message);
//         }catch(err){
//             console(err);
//         }
//     }
//     return(
//          <form onSubmit={handleSubmit}>
//       <input name="emailOrPhone" placeholder="emailOrPhone" onChange={handleChange} />
//       <input name="password" type="password" placeholder="Mật khẩu" onChange={handleChange} />
//       <button type="submit">Đăng nhập</button>
//     </form>
//     )
// }
// export default LoginForm;

import React, { useState, useContext } from "react";
import { loginApi } from "../../api/LoginApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
       e.preventDefault();
    if (!formData.emailOrPhone || !formData.password) {
      alert("Cần nhập đầy đủ thông tin");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^0\d{9}$/;
    if (
      !emailRegex.test(formData.emailOrPhone) &&
      !phoneRegex.test(formData.emailOrPhone)
    ) {
      alert("Nhập sai định dạng email hoặc số điện thoại");
      return;
    }
    try {
      const data = await loginApi(formData);
      if (data.success) {
        alert(data.message);
       login(data.token);
        navigate("/homePage");
      } else {
        alert("Đăng nhập thất bại!");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="max-w-lg flex flex-col justify-center items-center w-full ">
      <h3 className="font-lodestone text-4xl text-[#9A1A04]">
        Chào mừng trở lại
      </h3>
      <p className="my-6">
        StayNow là website đặt phòng khách sạn trực tuyến, hỗ trợ tìm kiếm nhanh
        chóng theo vị trí, ngày và số lượng khách.
      </p>
      <form onSubmit={handleSubmit} className="grid w-full gap-3 text-black">
        <input
          name="emailOrPhone"
          placeholder="Email hoặc số điện thoại"
          onChange={handleChange}
          className="border-b-2  px-2 py-1 w-full cursor-pointer"
        />
        <input
          name="password"
          placeholder="Mật khẩu"
          onChange={handleChange}
          className="border-b-2  px-2 py-1 w-full cursor-pointer"
        />

        <button
          type="submit"
          class="font-lodestone bg-[#6F6F4B] w-full mt-8 py-2 rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105 text-white"
        >
          Đăng nhập
        </button>
      </form>
      <div className="flex mt-5 z-50">
        <p>Chưa có tài khoản?</p>
        <a href="/registerPage" className="underline">
          {" "}
          Đăng ký ngay!
        </a>
      </div>
    </div>
  );
};
export default LoginForm;
