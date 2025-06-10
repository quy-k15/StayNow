import { TiTick } from "react-icons/ti";
const HotelCard = ({ img, name, star, comment, price, list, onOpenRoom  }) => {
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
          <div className="flex items-center mb-3">
            <TiTick />
            <p>Đề cập đến: Cổ điển, sang trọng</p>
          </div>
          <div className="flex items-center">
            <TiTick />
            <p>Bao gồm bữa sáng</p>
            <p className="ml-auto">Xem ưu đãi</p>
          </div>

          
        </div>
        <div className="flex mt-5">
          <button className=" bg-[#9A1A04] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-auto mt-auto" onClick={onOpenRoom}> Xem Phòng </button>
          {list && <button className="bg-[#6F6F4B] px-4 py-1 rounded-sm font-lodestone text-amber-50 ml-5">Xem Khách sạn</button>}
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
