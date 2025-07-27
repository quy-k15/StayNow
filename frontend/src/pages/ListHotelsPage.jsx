import DateGuestPicker from "../components/DateGuestPicker";
import SlideHotelCard from "../components/SlideHotelCard";

const ListHotelsPage = () => {
  return (
    <div className="w-full font-UTM mt-14 pt-0.5">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <h1 className="font-lodestone text-2xl md:text-4xl lg:text-5xl text-[#9A1A04] mb-3 mt-5">
          CÁC KHÁCH SẠN TẠI HUẾ
        </h1>
        <p className="text-2xl">
          Từ khách sạn giá rẻ đến phòng sang trọng và nhiều loại chỗ nghỉ khác
        </p>
        <div className="flex lg:w-2/3 flex- gap-4 relative my-3">
          <DateGuestPicker bgColor="6F6F4B" textColor="ffffff" showGuest={true} />
        </div>
      </div>

      <div className=" bg-[#6F6F4B]/50 w-full">
        <div className="mx-auto max-w-7xl py-6 px-5 lg:px-0">
          <h3 className="font-lodestone text-lg md:text-2xl text-[#9A1A04] mb-4">
            TOP 10 KHÁCH SẠN ĐƯỢC ĐÁNH GIÁ CAO NHẤT
          </h3>
          <SlideHotelCard />
        </div>
      </div>
    </div>
  );
};
export default ListHotelsPage;
