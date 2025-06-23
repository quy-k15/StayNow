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
    <div className="w-full h-64 md:h-80 lg:h-[400px] bg-[#E8D4B9] flex flex-col relative rounded cursor-pointer" onClick={handleToDetail}>
      <div className="w-full h-2/5 md:h-1/2 min-h-32 max-h-[230px]">
        <img src={imgImperialRoom} className="w-full h-full object-cover rounded"></img>
      </div>
      <div className="px-3 md:px-4">
        <h3 className=" text-sm md:text-base lg:text-xl text-[#9A1A04] font-lodestone">
          Khách sạn Imperial
        </h3>
        <img src={iconStar} className=" w-1/2 "></img>
        <p className="text-sm md:text-base lg:text-lg">28m2</p>
        <p className="text-[#91908F] line-through text-sm md:text-base lg:text-lg">3.961.680đ</p>
        <p className="text-[#9A1A04] text-base md:text-lg lg:text-xl">Chỉ từ 2.961.680đ</p>
        <p className="text-[#91908F] text-sm md:text-base lg:text-lg">Chưa bao gồm thuế và phí</p>
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
