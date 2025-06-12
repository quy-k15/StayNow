import DateRangePicker from "../components/DateRangePicker";
import GuestRoomPicker from "../components/GuestRoomPicker";
import SlideHotelCard from "../components/SlideHotelCard";

const ListHotelsPage = () => {
  return (
    <div className="w-full font-UTM">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-lodestone text-5xl text-[#9A1A04] mb-3 mt-5">
          CÁC KHÁCH SẠN TẠI HUẾ
        </h1>
        <p className="text-2xl">
          Từ khách sạn giá rẻ đến phòng sang trọng và nhiều loại chỗ nghỉ khác
        </p>
        <div className="flex lg:w-2/3 items-center gap-4 relative my-3">
          <DateRangePicker bgColor="6F6F4B" textColor="ffffff" width="65%" />
          <GuestRoomPicker />
        </div>
      </div>

      <div className=" bg-[#6F6F4B]/50 w-full">
        <div className="mx-auto max-w-7xl py-6">
          <h3 className="font-lodestone text-2xl text-[#9A1A04] mb-4">
            TOP 10 KHÁCH SẠN ĐƯỢC ĐÁNH GIÁ CAO NHẤT
          </h3>
          <SlideHotelCard />
        </div>
      </div>
    </div>
  );
};
export default ListHotelsPage;
