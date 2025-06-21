const TienIchBox = ({ title, desc, img }) => (
  <div className="relative flex justify-center">
    <img src={img} className="w-full" />
    <div className="absolute bg-[#E8D4B9] w-3/4 px-3 pt-5 pb-10 rounded-sm bottom-0 md:-bottom-1/4 md:h-50 lg:h-[230px] z-10">
      <h4 className="font-lodestone mb-3">{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

export default TienIchBox;