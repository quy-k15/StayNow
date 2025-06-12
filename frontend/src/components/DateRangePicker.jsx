import { useState, useEffect } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = ({ bgColor, textColor, width }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [opendStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const handleChangeStart = (date) => {
    setStartDate(date);
    localStorage.setItem("startDate", JSON.stringify(date));
  };
  const handleChangeEnd = (date) => {
    setEndDate(date);
    localStorage.setItem("endDate", JSON.stringify(date));
  };

  useEffect(() => {
    const storedStart = localStorage.getItem("startDate");
    const stroredEnd = localStorage.getItem("endDate");
    if (storedStart) setStartDate(new Date(JSON.parse(storedStart)));
    if (stroredEnd) setEndDate(new Date(JSON.parse(stroredEnd)));
  }, []);
  useEffect(() => {
    if (startDate) {
      localStorage.setItem(
        "startDate",
        JSON.stringify(startDate.toISOString())
      );
    }
    if (endDate) {
      localStorage.setItem("endDate", JSON.stringify(endDate.toISOString()));
    }
  }, [startDate, endDate]);

  return (
    <div className="py-2 relative flex justify-between gap-4"
      style={{width : width}}
    >
      <div
        onClick={() => setOpenStart(!opendStart)}
        className="px-4 py-2 rounded w-1/2 cursor-pointer"
        style={{
          backgroundColor: `#${bgColor}`,
          color: `#${textColor}`,
        }}
      >
        <div className="flex items-center gap-4">
          <FaRegCalendar className="text-[#F2B03F]" />
          <div className="flex flex-col">
            <p className="text-xs">Nhận phòng</p>
            <p className="text-sm font-medium">
              {startDate ? startDate.toLocaleDateString() : "Chọn ngày"}
            </p>
          </div>
        </div>
      </div>

      {opendStart && (
        <div className="absolute top-full left-0 z-10 rounded-xl bg-white">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              handleChangeStart(date);
              setOpenStart(false);
            }}
            inline
          />
        </div>
      )}
      <div
        onClick={() => setOpenEnd(!openEnd)}
        className="px-4 py-2 rounded w-1/2 cursor-pointer"
        style={{
          backgroundColor: `#${bgColor}`,
          color: `#${textColor}`,
        }}
      >
        <div className="flex items-center gap-4">
          <FaRegCalendar className="text-[#F2B03F]" />
          <div className="flex flex-col">
            <p className="text-xs">Trả phòng</p>
            <p className="text-sm font-medium">
              {endDate ? endDate.toLocaleDateString() : "Chọn ngày"}
            </p>
          </div>
        </div>
      </div>

      {openEnd && (
        <div className="absolute top-full right-0  z-10 rounded-xl bg-white">
          <DatePicker
            selected={endDate}
            onChange={(date) => {
              handleChangeEnd(date);
              setOpenEnd(false);
            }}
            inline
          />
        </div>
      )}
    </div>
  );
};
export default DateRangePicker;
