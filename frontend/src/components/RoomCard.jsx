import { useNavigate } from "react-router-dom";
import iconShowerFaucet from "../assets/iconShowerFaucet.png";
import iconAirConditioner from "../assets/iconAirConditioner.png";
import iconHotWater from "../assets/iconHotWater.png";
import iconSofa from "../assets/iconSofa.png";
const RoomCard = ({ img, name, star, comment, price, list, onOpenRoom }) => {
  const navigate = useNavigate();
  const handleDetailHotels = () => {
    navigate("/detailHotelsPage");
  };
  return (
    <div className="flex bg-[#E8D4B9] w-full">
      <img src={img} alt="img_hotel" className="rounded-sm"></img>
      <div className="flex-col gap-4 w-full p-5">
        <div className="flex-col w-full">
          <div className="flex w-full mb-1">
            <h2 className="font-lodestone text-[#9A1A04] text-2xl">{name}</h2>
            <p className="ml-auto text-2xl">{price} đ</p>
          </div>
          <div>
            <p className="mb-3">
              {star} ({comment} đánh giá)
            </p>
          </div>
          <div className="flex gap-8">
            <div
              className="flex flex-col gap-2 border-r-3 pr-8"
              style={{ borderColor: "#6F6F4B" }}
            >
              <p>Kích thước: 28m2</p>
              <p>Khách: 2 người lớn, 1 trẻ em</p>
              <p>Bao gồm ăn sáng</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 my-1">
                <img src={iconShowerFaucet} className="text-[#6F6F4B]" />
                <p>Vòi tắm đứng </p>
              </div>
              <div className="flex items-center gap-4 my-1">
                <img src={iconSofa} className="text-[#6F6F4B]" />
                <p>Khu vực chờ </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 my-1">
                <img src={iconHotWater} className="text-[#6F6F4B]" />
                <p>Nước nóng </p>
              </div>
              <div className="flex items-center gap-4 my-1">
                <img src={iconAirConditioner} className="text-[#6F6F4B]" />
                <p>Máy lạnhlạnh </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          {list && (
            <>
              <button
                className=" bg-[#9A1A04] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-auto mt-auto cursor-pointer"
                onClick={onOpenRoom}
              >
            
                Xem Phòng
              </button>
              <button
                className="bg-[#6F6F4B] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-5 cursor-pointer "
                onClick={handleDetailHotels}
              >
                Xem Khách sạn
              </button>
            </>
          )}
          {!list && (
            <>
              <button
                className=" bg-[#6F6F4B] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-auto mt-auto cursor-pointer"
                onClick={onOpenRoom}
              >
                Xem Chi Tiết
              </button>
              <button
                className="bg-[#9A1A04] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-5 cursor-pointer"
                onClick={handleDetailHotels}
              >
                Đặt phòng
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default RoomCard;
