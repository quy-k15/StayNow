import { useState } from "react";
import RoomCard from "../components/RoomCard";
import Subtitle from "../components/Subtitle";
import imghotelLists from "../assets/imghotelLists.png";
import DateRangePicker from "../components/DateRangePicker";
import { FaUserGroup } from "react-icons/fa6";
import GuestRoomPicker from "../components/GuestRoomPicker";
import DetailRoomCard from "../components/DetailRoomCard";

const BookingHotel = () => {
  const [showSubtitle, setShowSubtitle] = useState(true);
  const [opendDetailRoom, setOpenDetailRoom] = useState(false);

  const handleOpendRoom =()=>{
    setOpenDetailRoom(true);
  }
  const handleExitRoom =()=>{
    setOpenDetailRoom(false)
  }

  const toggleSubtitle = () => {
    setShowSubtitle((prev) => !prev);
  };

  return (
    <div className="mx-auto max-w-7xl font-UTM relative min-h-screen">
      <h2 className="font-lodestone text-[#9A1A04] text-4xl mt-10 mb-5">
        {" "}
        KHÁCH SẠN TẠI HUẾ VÀ ĐỊA ĐIỂM LƯU TRÚ
      </h2>
      <div className="flex lg:w-2/3 items-center gap-4 relative">
        <DateRangePicker bgColor="6F6F4B" textColor="ffffff" width="65%"/>
        <GuestRoomPicker />
      </div>
      
      <hr className="h-[3px] w-full bg-[#6F6F4B] border-none my-4"></hr>
      <div className="flex gap-10">
        <div>
          <button
            onClick={toggleSubtitle}
            className="md:hidden bg-[#6F6F4B] text-white px-4 py-2 rounded"
          >
            {showSubtitle ? "Đóng lọc" : "Lọc"}
          </button>
          <div
            className={`mt-4 ${
              showSubtitle ? "block" : "hidden"
            } md:block transition-all duration-300`}
          >
            <Subtitle />
          </div>
        </div>
        <div className="w-full">
          <RoomCard
            img={imghotelLists}
            name="IMPERIAL"
            star="4.5"
            comment="229"
            price="2.961.680"
            list={true}
            onOpenRoom={handleOpendRoom}
          />
        </div>
      </div>
      {opendDetailRoom && <DetailRoomCard name ="IMPERIAL" onExit={handleExitRoom}/>}
    </div>
  );
};
export default BookingHotel;
