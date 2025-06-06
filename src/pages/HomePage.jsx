import { Link } from "react-router-dom";
import imgSlideHome from "../assets/imgSlideHomePage.png";
import Form from "../components/form";
import iconGoodPrice from "../assets/iconGoodPrice.png";
import iconSaveTime from "../assets/iconSaveTime.png";
import iconSmartHotel from "../assets/iconSmartHotel.png";
import imgBGGiayCu from "../assets/imgBGGiayCu.png";
import imgTienIch1 from "../assets/imgTienIch1.png";
import imgTienIch2 from "../assets/imgTienIch2.png";
import imgTienIch3 from "../assets/imgTienIch3.png";
import imgTienIch4 from "../assets/imgTienIch4.png";
import imgBgTrongDong from "../assets/imgBGTrongDong.png";
import imgMap from "../assets/imgMap.png";
import imgDJEvent from "../assets/imgDJEvent.png";
import imgArtEvent from "../assets/imgArtEvent.png";
import imgFeedback from "../assets/imgFeedback.png";

import ListHotels from "../components/ListHotels";
import TienIchBox from "../components/TienIchBox";
import Banner from "../components/Banner";
import EventBox from "../components/EventBox";
import WhyChooseHotelX from "../components/WhyChooseHotelX";

const Homepage = () => {
  return (
    <div className="mx-auto max-w-7xl font-UTM">
      <div className="bg-[#E8D4B9] h-[550px] max-h-7xl relative flex items-center justify-between">
        <div className="font-lodestone pl-20 text-7xl leading-tight text-[#9A1A04] relative z-10">
          <h1 className="py-auto ">KHÁM PHÁ</h1>
          <h1 className="py-auto ">CỐ ĐÔ HUẾ</h1>
        </div>
        <img
          src={imgSlideHome}
          className="absolute bottom-0 right-0 w-[70%] z-0"
        ></img>
        <Form />
      </div>
      <div className="flex gap-30 my-4">
        <div className="flex gap-4 items-center justify-center text-lg">
          <img src={iconGoodPrice} className="w-[55px]"></img>
          <p>Giá tốt nhất</p>
        </div>
        <div className="flex gap-4 items-center justify-center text-lg">
          <img src={iconSaveTime} className="w-[55px]"></img>
          <p>Không cần đặt cọc</p>
        </div>
        <div className="flex gap-4 items-center justify-center text-lg">
          <img src={iconSmartHotel} className="w-[55px]"></img>
          <div className="flex-col">
            <p>Khách sạn thông minh</p>
            <p>đầu tiên ở Việt Nam</p>
          </div>
        </div>
      </div>
      <ListHotels />
      <div
        style={{
          backgroundImage: `url(${imgBGGiayCu})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "100% auto",
        }}
        className="pb-40"
      >
        <h1 className="text-[#9A1A04] font-lodestone flex justify-center text-4xl mt-3 py-20">
          CÁC TIỆN ÍCH KHÁC
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-20 sm:gap-10 lg:grid-cols-4 gap-6">
          <TienIchBox
            title="Relaxing Room"
            desc="Phòng chiếu phim riêng
            mang đến trải nghiệm 
            giải trí sống động, thoải
            mái ngay trong
            khách sạn."
            img={imgTienIch1}
          />
          <TienIchBox
            title="self-locker"
            desc="Tủ khóa tự phục vụ
            tiện lợi, an toàn, giúp 
            khách cất giữ hành
            lý dễ dàng suốt thời
            gian lưu trú."
            img={imgTienIch2}
          />
          <TienIchBox
            title="self-laundry"
            desc="Khu giặt tự phục vụ 
            tiện lợi, giúp khách dễ 
            dàng giặt sấy quần áo
            bất cứ lúc nào trong 
            thời gian lưu trú."
            img={imgTienIch3}
          />
          <TienIchBox
            title="Free gaming"
            desc="Khu chơi game miễn phí
            mang đến không gian 
            giải trí hiện đại, đa dạng 
            trò chơi, giúp khách thư 
            giãn và tận hưởng trọn 
            vẹn thời gian lưu trú."
            img={imgTienIch4}
          />
        </div>
      </div>
      <div className="my-10">
        <Banner
          title="MỪNG KHAI TRƯƠNG KHÁCH SẠN"
          desc="Giảm giá 50% tiền đặt phòng từ 10-11 tới 2-12 "
          img={imgBgTrongDong}
        />
      </div>
      <h1 className="text-[#9A1A04] font-lodestone flex justify-center text-4xl mt-3 py-20">
        ĐỊA ĐIỂM VÀ SỰ KIỆN
      </h1>
      <div className="lg:flex gap-10">
        <div>
          <img src={imgMap}></img>
        </div>
        <div className="w-1/3">
          <EventBox
            title="HÒA NHẠC CÙNG DJ ĐỨC ROMAN FLUGEL"
            img={imgDJEvent}
          />
          <div className="mt-4">
            <EventBox
              title="TRIỂN LÃM “ART IN THE FOREST 2019” "
              img={imgArtEvent}
            />
          </div>
        </div>
      </div>
      <div className="lg:flex bg-[#6F6F4B]/60 mt-10 rounded-sm p-5">
        <div className="lg:w-1/2 gap-20">
          <h1 className="text-[#9A1A04] font-lodestone text-4xl mt-3 py-10">
            VÌ SAO NÊN CHỌN STAYNOW
          </h1>
          <WhyChooseHotelX
            title="kHÁCH SẠN THÔNG MING ĐẦU TIÊN Ở VIỆT NAM"
            desc="Khách sạn thông minh ứng dụng công nghệ để
              tự động hóa dịch vụ và cá nhân hóa trải nghiệm
              khách hàng. Mọi tiện ích được điều khiển dễ dàng
              qua điện thoại."
          />
          <WhyChooseHotelX
            title="PHÒNG Ở ĐỘC ĐÁO"
            desc="Phòng ở độc đáo được thiết kế sáng tạo, tiện nghi 
              hiện đại và mang phong cách riêng, mang đến trải 
              nghiệm mới lạ và đáng nhớ cho khách lưu trú."
          />
          <WhyChooseHotelX
            title="TRẢI NGHIỆM THÚ VỊ"
            desc="Trải nghiệm thú vị với không gian ấn tượng, dịch 
              vụ tiện nghi và công nghệ hiện đại, mang đến cảm 
              giác thoải mái và mới mẻ cho khách hàng."
          />
          <WhyChooseHotelX
            title="CHÍNH SÁCH GIÁ TỐT NHẤT"
            desc="Chính sách giá tốt nhất với mức giá hợp lý, ưu đãi
              hấp dẫn và nhiều lựa chọn phù hợp nhu cầu 
              khách hàng."
          />
        </div>
        <div>
           <h1 className="text-[#9A1A04] font-lodestone text-4xl mt-3 py-10">
            CỘNG ĐỒNG 
          </h1>
          <img src={imgFeedback} alt="image feeback" className="w-full"></img>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
