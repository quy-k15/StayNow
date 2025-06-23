const EventBox = ({ title, img }) => (
  <div
    className=" relative h-[260px] font-bold w-full rounded-sm cursor-pointer" 
    style={{
      backgroundImage: `url(${img})`,
    }}
  >
    <p className="bg-[#EFC793] rounded-sm px-4 py-1 w-fit "> Sự kiện </p>
    <div className="absolute bg-[#6F6F4B]/80 w-full bottom-0 font-lodestone items-center justify-center flex">
      <h2 className="py-4">{title}</h2>
    </div>
  </div>
);

export default EventBox;
