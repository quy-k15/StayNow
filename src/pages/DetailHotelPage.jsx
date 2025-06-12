import { useState } from "react";
import Voucher from "../components/Voucher";
import DetailRoomCard from "../components/DetailRoomCard";
import RoomCard from "../components/RoomCard";
import imgRoomCard1 from "../assets/imgRoomCard1.jpg";
import imgRoomCard2 from "../assets/imgRoomCard2.jpg";
import imgRoomCard3 from "../assets/imgRoomCard3.jpg";
import imgRoomCard4 from "../assets/imgRoomCard4.jpg";
import imgRoomCard5 from "../assets/imgRoomCard5.jpg";
import iconStar from "../assets/iconStar.png";
import imghotelLists from "../assets/imghotelLists.png";

const DetailHotelsPage = () => {
    const [opendDetailRoom, setOpenDetailRoom] = useState(false);
  
    const handleOpendRoom =()=>{
      setOpenDetailRoom(true);
    }
    const handleExitRoom =()=>{
      setOpenDetailRoom(false)
    }
  return (
    <div className="mx-auto max-w-7xl font-UTM relative">
      <div className="flex w-full gap-4 h-[450px] overflow-hidden mt-3">
        <img
          src={imgRoomCard1}
          alt="img_detail_hotel"
          className="w-1/2 h-full object-cover rounded-sm"
        ></img>
        <div className="flex flex-col w-1/2 gap-4">
          <div className="flex gap-4 h-1/2">
            <img
              src={imgRoomCard2}
              alt="img_detail_hotel"
              className="w-1/2 h-full object-cover rounded-sm"
            ></img>
            <img
              src={imgRoomCard3}
              alt="img_detail_hotel"
              className="w-1/2 h-full object-cover rounded-sm"
            ></img>
          </div>
          <div className="flex gap-4 h-1/2">
            <img
              src={imgRoomCard4}
              alt="img_detail_hotel"
              className="w-1/2 h-full object-cover rounded-sm"
            ></img>
            <img
              src={imgRoomCard5}
              alt="img_detail_hotel"
              className="w-1/2 h-full object-cover rounded-sm"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-end my-6">
        <h1 className="font-lodestone text-5xl text-[#9A1A04]">
          KHÁCH SẠN IMPERIAL
        </h1>
        <img src={iconStar} slt="img_star" className="h-6"></img>
        <p>(3000 lượt đánh giá)</p>
      </div>
      <div className="flex gap-10 w-full bg-[#F2B03F] py-2 px-2 mb-5 text-[#ffffff] items-center">
        <p>Tổng quan</p>
        <p>Phòng nghỉ</p>
        <p>Tiện tích</p>
        <p>Đánh giá</p>
        <p>Chính sách</p>
        <div className="flex right-0 ml-auto gap-5 items-center">
          <p>400.000đ</p>
          <button className="bg-[#6F6F4B] py-1 px-3 rounded-sm rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105">
            Xem giá
          </button>
        </div>
      </div>
      <p>
        Địa chỉ: Số 08 Đường Hùng Vương, Phường Phú Hội, Thành phố Huế, Thừa
        Thiên Huế, Việt Nam
      </p>
      <p className="my-2">
        Tọa lạc ngay tại vị trí đắc địa ở trung tâm thành phố Huế – vùng đất Cố
        đô giàu giá trị văn hóa và lịch sử, Khách sạn Imperial Huế tự hào là
        khách sạn 5 sao đầu tiên được xây dựng tại nơi đây. Nổi bật với lối kiến
        trúc tinh tế, khéo léo hòa quyện giữa vẻ đẹp cung đình truyền thống và
        phong cách hiện đại sang trọng, khách sạn mang đến một không gian nghỉ
        dưỡng đậm chất nghệ thuật và quý phái. Với tầm nhìn mở rộng ra dòng sông
        Hương thơ mộng cùng Đại Nội cổ kính – biểu tượng của triều đại phong
        kiến Việt Nam, du khách khi lưu trú tại Imperial Huế sẽ được đắm chìm
        trong khung cảnh nên thơ và đậm chất hoài niệm.
      </p>
      <p className="my-2">
        Khách sạn sở hữu hơn 190 phòng nghỉ được thiết kế tinh xảo, đầy đủ tiện
        nghi, đáp ứng mọi nhu cầu từ nghỉ dưỡng đến công tác. Ngoài ra, hệ thống
        nhà hàng trong khuôn viên khách sạn phục vụ đa dạng món ăn từ ẩm thực
        truyền thống cung đình Huế đến các món quốc tế đặc sắc, được chế biến
        bởi các đầu bếp chuyên nghiệp. Dịch vụ spa cao cấp tại Imperial Huế là
        nơi lý tưởng để du khách thư giãn, tái tạo năng lượng sau những ngày
        khám phá.
      </p>
      <p className="mt-2 mb-5">
        Imperial Huế không chỉ là điểm dừng chân sang trọng mà còn là nơi mang
        đến trải nghiệm văn hóa sâu sắc. Đây thực sự là lựa chọn hoàn hảo cho
        những ai mong muốn tận hưởng không khí yên bình, thưởng thức vẻ đẹp dịu
        dàng của đất Cố đô và tìm về giá trị truyền thống giữa nhịp sống hiện
        đại.
      </p>
      <Voucher
        title="MỪNG KHAI TRƯƠNG KHÁCH SẠN"
        percent="50"
        startDate="10-11"
        endDate="2-12"
      />
      <h2 className="font-lodestone text-2xl my-8">
        Những phòng còn trống tại Imperial
      </h2>
      <div className="w-full overflow-auto max-h-[70vh] flex flex-col gap-4 mt-5 mb-10">
        <RoomCard
          img={imghotelLists}
          name="IMPERIAL"
          star="4.5"
          comment="229"
          price="2.961.680"
          list={false}
          onOpenRoom={handleOpendRoom}
        />
          <RoomCard
          img={imghotelLists}
          name="IMPERIAL"
          star="4.5"
          comment="229"
          price="2.961.680"
          list={false}
          onOpenRoom={handleOpendRoom}
        />
          <RoomCard
          img={imghotelLists}
          name="IMPERIAL"
          star="4.5"
          comment="229"
          price="2.961.680"
          list={false}
          onOpenRoom={handleOpendRoom}
        />
          <RoomCard
          img={imghotelLists}
          name="IMPERIAL"
          star="4.5"
          comment="229"
          price="2.961.680"
          list={false}
          onOpenRoom={handleOpendRoom}
        />
      </div>
        {opendDetailRoom && <DetailRoomCard name ="IMPERIAL" onExit={handleExitRoom}/>}
    </div>
  );
};
export default DetailHotelsPage;
