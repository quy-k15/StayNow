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
    <div className="flex bg-[#E8D4B9] w-full max-h-[260px]">
      <img
        src={img}
        alt="img_hotel"
        className="rounded-sm object-cover min-w-[120px] max-w-[300px] w-full h-[150px] md:h-[240px] lg:h-[260px] justify-center items-center my-auto"
      ></img>
      <div className="flex-col gap-4 w-full p-2 md:p-5">
        <div className="flex-col w-full">
          <div className="flex flex-col md:flex-row  w-full mb-1">
            <h2 className="font-lodestone text-[#9A1A04] text-xl md:text-2xl">
              {name}
            </h2>
            <p className="md:ml-auto  text-xl md:text-2xl">{price} đ</p>
          </div>

          <div className="flex md:gap-3 lg:gap-5">
            <div
              className="flex flex-col md:gap-2 md:border-r-3 md:pr-8"
              style={{ borderColor: "#6F6F4B" }}
            >
              <p className="mb-1 text-sm md:text-base lg:text-lg">
                {star} ({comment} đánh giá)
              </p>
              <p className="text-sm md:text-base lg:text-lg">Kích thước: 28m2</p>
              <p className="text-sm md:text-base lg:text-lg">Khách: 2 người lớn, 1 trẻ em</p>
              <p className="text-sm md:text-base lg:text-lg">Bao gồm ăn sáng</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 my-1">
                <img src={iconShowerFaucet} className="text-[#6F6F4B] hidden md:block" />
                <p className="hidden lg:block">Vòi tắm đứng </p>
              </div>
              <div className="flex items-center gap-4 my-1">
                <img src={iconSofa} className="text-[#6F6F4B] hidden md:block" />
                <p className="hidden lg:block">Khu vực chờ </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 my-1">
                <img src={iconHotWater} className="text-[#6F6F4B] hidden md:block" />
                <p className="hidden lg:block">Nước nóng </p>
              </div>
              <div className="flex items-center gap-4 my-1">
                <img src={iconAirConditioner} className="text-[#6F6F4B] hidden md:block" />
                <p className="hidden lg:block">Máy lạnhlạnh </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-1 md:mt-2 lg:mt-5">
          {list && (
            <>
              <button
                className=" bg-[#9A1A04] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-auto mt-auto cursor-pointer text-sm md:text-base lg:text-lg"
                onClick={onOpenRoom}
              >
                Xem Phòng
              </button>
              <button
                className="bg-[#6F6F4B] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-5 cursor-pointer text-sm md:text-base lg:text-lg"
                onClick={handleDetailHotels}
              >
                Xem Khách sạn
              </button>
            </>
          )}
          {!list && (
            <>
              <button
                className=" bg-[#6F6F4B] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-auto mt-auto cursor-pointer text-sm md:text-base lg:text-lg"
                onClick={onOpenRoom}
              >
                Xem thêm
              </button>
              <button
                className="bg-[#9A1A04] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-5 cursor-pointer hidden md:block text-sm md:text-base lg:text-lg"
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
