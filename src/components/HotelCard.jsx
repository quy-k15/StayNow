import { useNavigate } from "react-router-dom";
import imgImperialRoom from "../assets/imgImperialRoom.png";
import iconLiked from "../assets/iconLiked.png";
import iconUnLiked from "../assets/iconUnLiked.png";
import iconStar from "../assets/iconStar.png";

const HotelCard = ({ isLiked }) => {
  const navigate = useNavigate();
  const handleToDetail =()=>{
    navigate("/detailHotelsPage")
  }
  return (
    <div className="w-72 h-[400px] bg-[#E8D4B9] flex flex-col relative rounded cursor-pointer" onClick={handleToDetail}>
      <div className="w-full min-h-[230px]">
        <img src={imgImperialRoom} className="w-full h-full object-cover rounded"></img>
      </div>
      <div className="px-4">
        <h3 className="text-xl text-[#9A1A04] font-lodestone">
          Khách sạn Imperial
        </h3>
        <img src={iconStar} className="h-6 w-1/2 "></img>
        <p>28m2</p>
        <p className="text-[#91908F] line-through">3.961.680đ</p>
        <p className="text-2xl text-[#9A1A04]">Chỉ từ 2.961.680đ</p>
        <p className="text-[#91908F]">Chưa bao gồm thuế và phí</p>
      </div>

      {isLiked ? (
        <img src={iconLiked} className="absolute z-10 top-4 right-4"></img>
      ) : (
        <img src={iconUnLiked} className="absolute z-10 top-4 right-4"></img>
      )}
    </div>
  );
};
export default HotelCard;
