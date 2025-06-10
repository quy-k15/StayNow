import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import imgRoomCard1 from "../assets/imgRoomCard1.jpg";
import imgRoomCard2 from "../assets/imgRoomCard2.jpg";
import imgRoomCard3 from "../assets/imgRoomCard3.jpg";
import imgRoomCard4 from "../assets/imgRoomCard4.jpg";
import imgRoomCard5 from "../assets/imgRoomCard5.jpg";
import imgRoomCard6 from "../assets/imgRoomCard6.jpg";

const images = [
  imgRoomCard1,
  imgRoomCard2,
  imgRoomCard3,
  imgRoomCard4,
  imgRoomCard5,
  imgRoomCard6,
];

const Slide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    if (thumbsSwiper && thumbsSwiper.slideTo) {
      const centeredIndex = realIndex - 2 < 0 ? 0 : realIndex - 2;
      thumbsSwiper.slideTo(centeredIndex);
    }
  };
  return (
    <div className="w-full max-w-[800px] mx-auto">
      {/* Slide chính (ảnh lớn) */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="mb-4 rounded overflow-hidden"
        loop={true}
        onSwiper={(swiper) => swiperRef.current == swiper}
        onSlideChange={handleSlideChange}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`main-${idx}`}
              className="w-full h-[550px] object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide nhỏ (thumbnail) */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4.5} // ✅ 4 ảnh đầy + 1 nửa ảnh
        watchSlidesProgress
        className="cursor-pointer"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`thumb-${idx}`}
              className="w-full h-[100px] object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
