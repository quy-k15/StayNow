import React,{useState} from "react";
import { registerUser } from "../../api/registerUserAPI";

const RegisterForm=()=>{
    const [formData, setFormData]=useState({
        fullName:'',
        email:'',
        password:'',
        phone:''
    });

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const handleSubmit = async(e)=>{ 
           e.preventDefault();
        if(!formData.fullName||!formData.email||!formData.password||!formData.phone)
        {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        //check email format
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test[formData.email]){
            alert("Email không hợp lệ!");
            return;
        }
        // check phone format 
        const phoneRegex= /^0\d{9}$/;
        if(!phoneRegex.test(formData.phone)){
            alert("Số điện thoại không hợp lệ!");
            return;
        }
        //check password length
        if(formData.password.length<6)
        {
            alert("Mật khẩu phải từ 6 ký tự trở lên!");
            return;
        }
        try{
            const data = await registerUser(formData);
            alert(data.message);
        }catch(err){
            console(err);
        }
    }
     return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Họ tên" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Số điện thoại" onChange={handleChange} />
      <input name="password" type="password" placeholder="Mật khẩu" onChange={handleChange} />
      <button type="submit">Đăng ký</button>
    </form>
  );

}
export default RegisterForm;