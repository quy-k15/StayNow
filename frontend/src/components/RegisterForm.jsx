// import React,{useState} from "react";
// import { registerUser } from "../../api/registerUserAPI";

// const RegisterForm=()=>{
//     const [formData, setFormData]=useState({
//         fullName:'',
//         email:'',
//         password:'',
//         phone:''
//     });

//     const handleChange = (e) =>{
//         setFormData({...formData, [e.target.name]:e.target.value});
//     }
//     const handleSubmit = async(e)=>{
//            e.preventDefault();
//         if(!formData.fullName||!formData.email||!formData.password||!formData.phone)
//         {
//             alert("Vui lòng điền đầy đủ thông tin!");
//             return;
//         }
//         //check email format
//         const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if(!emailRegex.test[formData.email]){
//             alert("Email không hợp lệ!");
//             return;
//         }
//         // check phone format
//         const phoneRegex= /^0\d{9}$/;
//         if(!phoneRegex.test(formData.phone)){
//             alert("Số điện thoại không hợp lệ!");
//             return;
//         }
//         //check password length
//         if(formData.password.length<6)
//         {
//             alert("Mật khẩu phải từ 6 ký tự trở lên!");
//             return;
//         }
//         try{
//             const data = await registerUser(formData);
//             alert(data.message);
//         }catch(err){
//             console(err);
//         }
//     }
//      return (
//     <form onSubmit={handleSubmit}>
//       <input name="fullName" placeholder="Họ tên" onChange={handleChange} />
//       <input name="email" placeholder="Email" onChange={handleChange} />
//       <input name="phone" placeholder="Số điện thoại" onChange={handleChange} />
//       <input name="password" type="password" placeholder="Mật khẩu" onChange={handleChange} />
//       <button type="submit">Đăng ký</button>
//     </form>
//   );

// }
// export default RegisterForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/registerUserApi";

const RegisterForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "passwordConfirm") {
      setConfirmPassword(e.target.values);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.values });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.paswordConfirm
    ) {
      alert("Cần nhập đầy đủ các trường!");
      return;
    }
    //check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Nhập email không đúng!");
      return;
    }
    // check phone format
    const phoneRegex = /^0\d{9}$/;
    if (phoneRegex.test(formData.phone)) {
      alert("Nhập số điện thoại không đúng!");
      return;
    }
    //check password
    if (formData.password != confirmPassword) {
      alert("Mật khẩu không chính xác!");
      return;
    }
    try {
      const data = await registerUser(formData);
      alert(data.message);
      navigate("/loginPage")
    } catch (e) {
      console.error(e); 
    }
  };
  return (
    <div className="max-w-lg flex flex-col justify-center items-center w-full ">
      <h3 className="font-lodestone text-4xl text-[#9A1A04]">Chào mừng đến với staynow</h3>
      <p className="my-6">StayNow là website đặt phòng khách sạn trực tuyến, hỗ trợ tìm kiếm nhanh chóng theo vị trí, ngày và số lượng khách.</p>
      <form onSubmit={handleSubmit} className="grid w-full gap-3 text-black">
        <input name="fullName" placeholder="Họ tên" onChange={handleChange} className="border-b-2  px-2 py-1 w-full cursor-pointer"/>
        <input name="email" placeholder="Email" onChange={handleChange} className="border-b-2  px-2 py-1 w-full cursor-pointer"/>
        <input
          name="phone"
          placeholder="Số điện thoại"
          onChange={handleChange}
          className="border-b-2  px-2 py-1 w-full cursor-pointer"
        />
        <input
          name="password"
          type="password"
          placeholder="Mật khẩu"
          onChange={handleChange}
          className="border-b-2  px-2 py-1 w-full cursor-pointer"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Xác nhận mật khẩu"
          onChange={handleChange}
          className="border-b-2  px-2 py-1 w-full cursor-pointer"
        />
         <button type="submit"class="font-lodestone bg-[#6F6F4B] w-full mt-8 py-2 rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105 text-white">Đăng ký</button>
      </form>
      <div className="flex mt-5 z-50">
        <p>Đã có tài khoản?</p>
        <a href="/loginPage" className="underline"> Đăng nhập ngay!</a>
      </div>
     
    </div>
  );
};

export default RegisterForm;
