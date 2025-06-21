const Banner = ({ title, desc, img }) => (
  <div className="bg-[#6F6F4B]/60 relative h-36 lg:h-[160px]">
    <div
      className="m-10 flex flex-col justify-center h-40 "
    >
      <h3 className="font-lodestone text-[#9A1A04] text-3xl my-4 z-10">{title}</h3>
      <p className="z-10">{desc}</p>
    </div>

    <button className="font-lodestone bg-[#9A1A04] text-white  mt-6 py-2 px-4 absolute z-10 top-1/2 right-10  rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105">
      KIỂM TRA PHÒNG TRỐNG
    </button>

    <img src={img} className="w-2/3 lg:w-1/2 absolute right-0 top-0 h-36 lg:h-[160px]" />
  </div>
);

export default Banner;
