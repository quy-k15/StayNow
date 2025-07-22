import React, {useState} from "react";
import { loginApi } from "../../api/LoginApi";

const LoginForm=()=>{
    const [formData, setFormDate]=useState({
        emailOrPhone:'',
        password:''
    });

    const handleChange=(e)=>{
        setFormDate({...formData, [e.target.name]:e.target.value});
    
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        if(!formData.emailOrPhone || !formData.password)
        {
             alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        //check email or phone format
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex= /^0\d{9}$/;

        if(!emailRegex.test[formData.emailOrPhone]&&!phoneRegex.test[formData.emailOrPhone]){
             alert("Email hoặc số điện thoại không hợp lệ!");
            return;
        }
        try{
            const data = await loginApi(formData);
            alert(data.message);
        }catch(err){
            console(err);
        }
    }
    return(
         <form onSubmit={handleSubmit}>
      <input name="emailOrPhone" placeholder="emailOrPhone" onChange={handleChange} />
      <input name="password" type="password" placeholder="Mật khẩu" onChange={handleChange} />
      <button type="submit">Đăng nhập</button>
    </form>
    )
}
export default LoginForm;