import HotelCard from "./HotelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import iconPrev from "../assets/iconPrev.png";
import iconNext from "../assets/iconNext.png";
const SlideHotelCard = () => {
  const totalCards = 10;
  const HotelCards = Array.from({ length: totalCards }, (_, index) => ({
    id: index + 1,
    isLiked: index % 2 === 0,
  }));
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden">
      <img
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow cursor-pointer rounded-full"
        src={iconPrev}
        alt="button_prev"
      ></img>
      <img
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow cursor-pointer rounded-full"
        src={iconNext}
        alt="button_prev"
      ></img>
      <Swiper
        className="!px-0"
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          640: {
            // sm
            slidesPerView: 3.5,
          },
          1024: {
            // lg
            slidesPerView: 4,
          },
          1280: {
            // xl
            slidesPerView: 5,
          },
        }}
        Navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Gán ref sau khi DOM mount xong
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {HotelCards.map((card) => (
          <SwiperSlide key={card.id}>
            <HotelCard isLiked={card.isLiked} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SlideHotelCard;
