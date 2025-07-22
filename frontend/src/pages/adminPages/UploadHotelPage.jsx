import UploadImage from "../../components/UploadImg";
import RegisterForm from "../../components/RegisterForm";
import LoginForm from "../../components/LoginForm";
const UploadHotelPage =()=>{
    return(
        <div>
            <UploadImage/>
            <RegisterForm/>
            <div className="mt-20">
                <LoginForm/>
            </div>
        </div>
    )
}
export default UploadHotelPage;