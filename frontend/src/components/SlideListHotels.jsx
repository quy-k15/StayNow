import { useRef, useState } from "react";
import { MdOutlineArrowBackIos, MdOutlineNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import useFetchHotel from "../hooks/useFetchHotels";

const SlideListHotels = () => {
  const { hotels, loading } = useFetchHotel();
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // realIndex

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  if (loading) return <p className="text-center">Đang tải dữ liệu...</p>;

   if (!Array.isArray(hotels)) {
    console.error("hotels không phải mảng:", hotels);
    return <div>Dữ liệu lỗi</div>;
  }
  return (
    <>
      {hotels && (
        <div className="relative">
          <h1 className="text-[#9A1A04] font-lodestone flex justify-center text-2xl md:text-4xl lg:text-5xl mt-2 mb-5 lg:mt-28 lg:mb-20">
            {hotels[currentIndex]?.name}
          </h1>
          <div className="flex gap-5 relative">
            <div className="w-full lg:w-3/4">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                loop
                className="rounded-sm overflow-hidden"
              >
                {hotels.map((hotel, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={hotel.imgURL || "/default-hotel.jpg"}
                      alt={`Hotel ${index}`}
                      className="w-full h-[300px] md:h-[570px] object-cover mb-10"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Nút điều khiển và hiển thị value */}
            <div className="flex text-4xl gap-4 h-8 absolute top-5 right-0 z-10 text-white lg:text-black lg:static">
              <button onClick={handlePrev} className="cursor-pointer">
                <MdOutlineArrowBackIos />
              </button>
              <p className="text-xl">
                {currentIndex + 1}/{hotels.length}
              </p>
              <button onClick={handleNext} className="cursor-pointer">
                <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
          <div className="md:absolute bg-[#F2B03F]  right-3 p-2 md:p-5 lg:p-10 w-full md:max-w-80 lg:max-w-[450px] lg:top-1/3 lg:right-0 z-10 rounded-sm min-h-[200px]">
            <h4 className="text-xl md:2xl lg:3xl">
              Được truyền cảm hứng từ những khao khát và mong muốn của chính bạn
            </h4>+
            <p className="my-4 text-base md:text-lg ">
              {hotels[currentIndex]?.description||"Không có mô tả"}
            </p>
            <button className="font-lodestone bg-[#6F6F4B] w-full mt-6 py-2 rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105">
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SlideListHotels;
