const Banner = ({ title, desc, img }) => (
  <div className="bg-[#6F6F4B]/60 relative h-[160px]">
    <div
      className="m-10 flex flex-col justify-center h-40"
    >
      <h3 className="font-lodestone text-[#9A1A04] text-3xl my-4">{title}</h3>
      <p>{desc}</p>
    </div>

    <button className="font-lodestone bg-[#9A1A04] text-white  mt-6 py-2 px-4 absolute z-10 top-1/2 right-10  rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105">
      KIỂM TRA PHÒNG TRỐNG
    </button>

    <img src={img} className="w-1/2 absolute right-0 top-0 h-[160px]" />
  </div>
);

export default Banner;
