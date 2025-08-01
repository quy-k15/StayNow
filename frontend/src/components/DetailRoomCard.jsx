import SlideRoomDetail from "./SlideRoomDetail";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaUserGroup } from "react-icons/fa6";
import { BiExitFullscreen } from "react-icons/bi";
import iconShowerFaucet from "../assets/iconShowerFaucet.png";
import iconAirConditioner from "../assets/iconAirConditioner.png";
import iconHotWater from "../assets/iconHotWater.png";
import iconSofa from "../assets/iconSofa.png";
const DetailRoomCard = ({ name, onExit }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full bg-[#E8D4B9] max-w-6xl relative overflow-auto max-h-[95vh] z-10 rounded-sm">
        <div className="w-full relative">
          <h2 className=" text-xl md:text-2xl lg:text-3xl p-2 font-lodestone" >{name}</h2>
          <BiExitFullscreen
            className="absolute top-0 right-0 m-3 text-xl md:text-2xl lg:text-3xl cursor-pointer"
            onClick={onExit}
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 bg-[#6F6F4B]/60 pb-3 rounded-t-sm rounded-bl-sm">
            <SlideRoomDetail />
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-between">
            <div className="px-5">
              <h3 className=" text-xl md:text-2xl lg:text-3xl">Thông tin phòng</h3>
              <div className="flex items-center gap-4 my-1 text-base md:text-lg">
                <SlSizeFullscreen className="text-[#6F6F4B]  w-5 h-5" />
                <p>28.0 m2</p>
              </div>
              <div className="flex items-center gap-4 my-1 text-base md:text-lg">
                <FaUserGroup className="text-[#6F6F4B]  w-5 h-5" />
                <p>28.0 m2</p>
              </div>
              <hr className="h-0.5 w-full bg-[#F2B03F] border-none my-2"></hr>
              <h3 className=" text-xl md:text-2xl lg:text-3xl">Tính năng phòng bạn thích</h3>
              <div className="flex items-center gap-4 my-1 text-base md:text-lg">
                <img className="text-[#6F6F4B] w-6 h-6 object-contain" src={iconShowerFaucet} />
                <p>Vòi tắm đứng </p>
              </div>
              <div className="flex items-center gap-4 my-1">
                <img src={iconSofa} className="text-[#6F6F4B] w-6 h-6 object-contain" />
                <p>Khu vực chờ</p>
              </div>
              <div className="flex items-center gap-4 my-1">
                <img src={iconHotWater} className="text-[#6F6F4B] w-6 h-6 object-contain" />
                <p>Nước nóng</p>
              </div>
              <div className="flex items-center gap-4 my-1">
                <img src={iconAirConditioner} className="text-[#6F6F4B] w-6 h-6 object-contain" />
                <p>Máy lạnh</p>
              </div>
              <hr className="h-0.5 w-full bg-[#F2B03F] border-none my-2"></hr>
              <h3 className="text-xl md:text-2xl lg:text-3xl">Tính năng khác </h3>
              <div className="flex items-center gap-4 my-1 w-full">
                <p className="w-1/2 mx-auto">Máy lạnh</p>
                <p className="w-1/2 mx-auto">Máy lạnh</p>
              </div>
              <div className="flex items-center gap-4 my-1 w-full">
                <p className="w-1/2 mx-auto">Quầy Bar mini</p>
                <p className="w-1/2 mx-auto">Tủ lạnh</p>
              </div>
              <div className="flex items-center gap-4 my-1 w-full">
                <p className="w-1/2 mx-auto">Nước đóng chai</p>
                <p className="w-1/2 mx-auto">TV</p>
              </div>
              <hr className="h-0.5 w-full bg-[#F2B03F] border-none my-2"></hr>
              <h3 className=" text-xl md:text-2xl lg:text-3xl">Tiện nghi phòng tắm </h3>
              <div className="flex items-center gap-4 my-1 w-full">
                <p className="w-1/2 mx-auto">Nước nóng</p>
                <p className="w-1/2 mx-auto">Phòng tắm riêng</p>
              </div>
              <div className="flex items-center gap-4 my-1 w-full">
                <p className="w-1/2 mx-auto">Bồn tắm</p>
                <p className="w-1/2 mx-auto">Khăn tắm</p>
              </div>
            </div>
            <div className="bg-[#6F6F4B]/60 w-full rounded-tr-sm px-5">
              <p className="mt-2">Khởi điểm từ</p>
              <h1 className="text-xl md:text-2xl lg:text-3xl">1.232.900/ phòng/ đêm</h1>
              <div className="flex ">
                <button className="font-lodestone bg-[#9A1A04] text-[#ffffff] w-2/3 mx-auto my-3 py-2 rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105">
                  Đặt phòng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailRoomCard;
