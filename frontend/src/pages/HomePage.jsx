import { Link } from "react-router-dom";
import imgSlideHome from "../assets/imgSlideHomePage.png";
import Form from "../components/Form";
import iconGoodPrice from "../assets/iconGoodPrice.png";
import iconSaveTime from "../assets/iconSaveTime.png";
import iconSmartHotel from "../assets/iconSmartHotel.png";
// import imgBGGiayCu from "../assets/imgBGGiayCu.png";
import imgTienIch1 from "../assets/imgTienIch1.png";
import imgTienIch2 from "../assets/imgTienIch2.png";
import imgTienIch3 from "../assets/imgTienIch3.png";
import imgTienIch4 from "../assets/imgTienIch4.png";
// import imgBgTrongDong from "../assets/imgBGTrongDong.png";
import imgMap from "../assets/imgMap.png";
import imgDJEvent from "../assets/imgDJEvent.png";
import imgArtEvent from "../assets/imgArtEvent.png";
import imgFeedback from "../assets/imgFeedback.png";

import SlideListHotels from "../components/SlideListHotels";
import TienIchBox from "../components/TienIchBox";
import Banner from "../components/Banner";
import EventBox from "../components/EventBox";
import WhyChooseHotelX from "../components/WhyChooseHotelX";
import Voucher from "../components/Voucher";

const Homepage = () => {
  return (
    <div className="mx-auto max-w-7xl font-UTM">
      <div className="bg-[#E8D4B9] h-[550px] md:h-[500px] max-h-7xl relative md:flex items-center justify-between mx-auto">
        <div className="font-lodestone py-3 md:pl-10 lg:pl-20 flex text-2xl md:text-4xl lg:text-5xl leading-tight text-[#9A1A04] relative z-10 justify-center md:justify-start">
          <h1 className="mr-2">KHÁM PHÁ</h1>
          <h1>CỐ ĐÔ HUẾ</h1>
        </div>
        <img
          src={imgSlideHome}
          className="absolute bottom-0 right-0 w-[70%] z-0 hidden md:block"
        ></img>
        <Form />
      </div>
      <div className="flex flex-wrap  items-start gap-3 md:gap-10 lg:gap-20 mx-5 lg:justify-start text-center ">
        <div className="flex gap-3 items-center text-center md:text-left">
          <img src={iconGoodPrice} className="w-12 h-12"></img>
          <p>Giá tốt nhất</p>
        </div>
        <div className="flex gap-3 items-center text-center md:text-left">
          <img src={iconSaveTime} className="w-12 h-12"></img>
          <p>Không cần đặt cọc</p>
        </div>
        <div className="flex gap-3 items-center text-center md:text-left">
          <img src={iconSmartHotel} className="w-12 h-12"></img>
          <div className="flex-col">
            <p>Khách sạn thông minh</p>
            <p>đầu tiên ở Việt Nam</p>
          </div>
        </div>
      </div>
      <SlideListHotels />
      <div className="pb-8 md:pb-15 lg:pb-40 lg:bg-[url('/img/imgBGGiayCu.png')] lg:bg-no-repeat lg:bg-top lg:bg-[length:100%_auto]">
        <h1 className="text-[#9A1A04] font-lodestone flex justify-center text-2xl md:text-4xl lg:text-5xl mt-3 py-5 md:py-10 lg:py-20">
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
      <div className="md:my-3 lg:my-10">
        {/* <Banner
          title="MỪNG KHAI TRƯƠNG KHÁCH SẠN"
          desc="Giảm giá 50% tiền đặt phòng từ 10-11 tới 2-12 "
          img={imgBgTrongDong}
        /> */}
        <Voucher
          title="MỪNG KHAI TRƯƠNG KHÁCH SẠN"
          percent="50"
          startDate="10-11"
          endDate="2-12"
        />
      </div>
      <h1 className="text-[#9A1A04] font-lodestone flex justify-center text-2xl md:text-4xl lg:text-5xl mt-3 py-5 md:py-10 lg:py-20">
        ĐỊA ĐIỂM VÀ SỰ KIỆN
      </h1>
      <div className="lg:flex gap-10">
        <div>
          <img src={imgMap}></img>
        </div>
        <div className="w-full mt-3 gap-3 lg:w-1/3 flex flex-row lg:flex-col lg:mt-0">
          <div className="w-1/2 lg:w-full">
            <EventBox
              title="HÒA NHẠC CÙNG DJ ĐỨC ROMAN FLUGEL"
              img={imgDJEvent}
            />
          </div>

          <div className=" w-1/2 lg:w-full lg:mt-4">
            <EventBox
              title="TRIỂN LÃM “ART IN THE FOREST 2019” "
              img={imgArtEvent}
            />
          </div>
        </div>
      </div>
      <div className="lg:flex bg-[#6F6F4B]/60 mt-10 rounded-sm p-5">
        <div className="lg:w-1/2 gap-20">
          <h1 className="text-[#9A1A04] font-lodestone text-2xl md:text-4xl lg:text-5xl mt-3 py-10">
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
          <h1 className="text-[#9A1A04] font-lodestone text-2xl md:text-4xl lg:text-5xl mt-3 py-10">
            CỘNG ĐỒNG
          </h1>
          <img src={imgFeedback} alt="image feeback" className="w-full"></img>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
