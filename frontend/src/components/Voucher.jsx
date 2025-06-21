import imgBgVoucher from "../assets/imgBgVoucher.png";
const Voucher = ({ title, percent, startDate, endDate }) => {
  return (
    <div
      className="w-full p-3  lg:p-10 flex flex-col md:flex-row rounded"
      style={{
        backgroundImage: `url(${imgBgVoucher})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full md:w-2/3">
        <h2 className="font-lodestone text-xl md:text-2xl lg:text-3xl text-[#9A1A04]">{title}</h2>
        <p>
          Giảm giá {percent}% tiền đặt phòng từ {startDate} tới {endDate}
        </p>
      </div>
      <button className="font-lodestone bg-[#9A1A04] text-[#ffffff] w-fit ml-auto  mt-6 py-2 px-4 rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105">
        {" "}
        ĐẶT PHÒNG NGAY
      </button>
    </div>
  );
};
export default Voucher;
