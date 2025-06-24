import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import "react-datepicker/dist/react-datepicker.css";
import DateGuestPicker from "./DateGuestPicker";

const hotels = [
  { name: "Tất cả khách sạn", value: "all" },
  { name: "Khách sạn Imperial", value: "khachsan1" },
  { name: "Khách sạn Mường Thanh", value: "khachsan2" },
  { name: "Khách sạn Azerai La Residence", value: "khachsan3" },
];
const Form = () => {
  const [selectedHotel, setSelectedHotel] = useState("all");
  const handleSelect = (value) => {
    setSelectedHotel(value);
  };

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleChange = (type, action) => {
    if (type === "adults") {
      setAdults((prev) =>
        action === "increase" ? prev + 1 : Math.max(1, prev - 1)
      );
      localStorage.setItem("adults", adults);
    } else if (type === "children") {
      setChildren((prev) =>
        action === "increase" ? prev + 1 : Math.max(0, prev - 1)
      );
      localStorage.setItem("children", children);
    }
  };
  useEffect(() => {
    const storedAdults = localStorage.getItem("adults");
    const storedChildren = localStorage.getItem("children");
    if (storedAdults) setAdults(storedAdults);
    if (storedChildren) setChildren(storedChildren);
  }, []);
  return (
    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      md:top-auto md:left-auto md:translate-x-0 md:translate-y-0  md:bottom-8 md:right-10  
      w-full max-w-[350px] bg-[#6F6F4B]/60 p-5  rounded-sm border-none 
      lg:-bottom-30 text-balance text-white mt-8 md:mt-0">
      <p>
        Đặt trực tiếp với chúng tôi, để nhận được mức giá ưu đãi tốt nhất, cùng
        nhiều khuyễn mãi khác.
      </p>
      <h3 className="pt-6 pb-1 font-bold">KHÁCH SẠN</h3>
      <Popover className="relative top-full left-0 z-10 w-full">
        <PopoverButton className="flex items-center top-full left-0 z-10 mt-1 w-full gap-x-1 text-sm/6 font-semibold text-[#A0A0A0] border-2 rounded-sm border-none px-4 py-2 cursor-pointer bg-white">
          {hotels.find((h) => h.value === selectedHotel)?.name}
          <RiArrowDropDownLine className="absolute size-5 flex-none text-gray-500 ml-2 right-2" />
        </PopoverButton>

        <PopoverPanel className="absolute top-full left-0 z-10 mt-3 w-full rounded-xl bg-white shadow-lg ring-1 ">
          <div className="p-2">
            {hotels.map((hotel) => (
              <div
                key={hotel.value}
                className="cursor-pointer rounded-md px-4 py-2 text-sm hover:bg-[#F2B03F] text-[#A0A0A0] font-medium"
                onClick={() => handleSelect(hotel.value)}
              >
                {hotel.name}
              </div>
            ))}
          </div>
        </PopoverPanel>
      </Popover>
      <h4 className="pt-2 pb-1 font-bold">Ngày</h4>

      <DateGuestPicker bgColor="ffffff" textColor="A0A0A0" width="100%" showGuest={false} />

      <h4 className="pb-1 font-bold">Khách</h4>
      <div className=" relative flex justify-between gap-4">
        {/* Người lớn */}
        <div className="w-1/2">
          <p>Người lớn</p>
          <div className="flex items-center gap-2 justify-between bg-white text-[#A0A0A0] rounded-sm mt-1 py-2">
            <button
              onClick={() => handleChange("adults", "decrease")}
              className="px-3 py-1 text-lg font-bold cursor-pointer"
            >
              <RiSubtractLine />
            </button>
            <p>{adults}</p>

            <button
              onClick={() => handleChange("adults", "increase")}
              className="px-3 py-1  text-lg font-bold cursor-pointer"
            >
              <IoMdAdd />
            </button>
          </div>
        </div>

        {/* Trẻ em */}
        <div className="w-1/2">
          <p>Trẻ em</p>
          <div className="flex items-center gap-2 justify-between bg-white text-[#A0A0A0] rounded-sm mt-1 py-2">
            <button
              onClick={() => handleChange("children", "decrease")}
              className="px-3 py-1 text-lg font-bold cursor-pointer"
            >
              <RiSubtractLine />
            </button>
            <p>{children}</p>

            <button
              onClick={() => handleChange("children", "increase")}
              className="px-3 py-1  text-lg font-bold cursor-pointer"
            >
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
      <button className="font-lodestone bg-[#9A1A04] w-full mt-6 py-2 rounded-sm cursor-pointer transition-transform duration-300 transform hover:scale-105">
        KIỂM TRA PHÒNG TRỐNG
      </button>
    </div>
  );
};
export default Form;
