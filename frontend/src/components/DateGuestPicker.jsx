import { useState, useEffect } from "react";
import { FaRegCalendar, FaUserGroup } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateGuestPicker = ({ bgColor, textColor, onChange, showGuest }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [opendStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [opendGuest, setOpendGuest] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

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

  const handleChange = (type, delta) => {
    let newVal;
    if (type === "adults") {
      newVal = Math.max(1, adults + delta);
      setAdults(newVal);
    } else if (type === "children") {
      newVal = Math.max(0, children + delta);
      setChildren(newVal);
    } else if (type === "rooms") {
      newVal = Math.max(1, rooms + delta);
      setRooms(newVal);
    }
    onChange?.({ adults, children, rooms });
  };

  useEffect(() => {
    const stored = localStorage.getItem("guestRoomInfo");
    if (stored) {
      const { adults, children, rooms } = JSON.parse(stored);
      setAdults(adults);
      setChildren(children);
      setRooms(rooms);
    }
  }, []);

  useEffect(() => {
    const guestInfo = { adults, children, rooms };
    localStorage.setItem("guestRoomInfo", JSON.stringify(guestInfo));
    onChange?.(guestInfo);
  }, [adults, children, rooms]);

  return (
    <div className="py-2 relative flex flex-wrap justify-between gap-4">
      <div
        onClick={() => setOpenStart(!opendStart)}
        className="flex-1 min-w-[150px] px-4 py-2 rounded cursor-pointer"
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
        <div className="absolute top-full left-0 z-90 rounded-xl bg-white">
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
        className="flex-1 min-w-[150px] px-4 py-2 rounded cursor-pointer"
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
        <div className="absolute top-full right-0  z-90 rounded-xl bg-white">
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

      {showGuest && (
        <div
          onClick={() => setOpendGuest(!opendGuest)}
          className="flex-1 min-w-[150px] px-4 py-2 rounded cursor-pointer bg-[#6F6F4B] text-[#ffffff]"
        >
          <div className="flex items-center gap-4">
            <FaUserGroup className="text-[#F2B03F]" />
            <div className="flex flex-col">
              <p className="text-xs">Khách và phòng</p>
              <p className="text-sm font-medium">
                {adults + children} khách · {rooms} phòng
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Popup chọn số lượng */}
      {opendGuest && (
        <div className="absolute top-full left-0 z-90 mt-2 w-full bg-white rounded-xl shadow-lg p-4 text-sm">
          <SelectorItem
            label="Người lớn"
            value={adults}
            min={1}
            onChange={(v) => handleChange("adults", v)}
          />
          <SelectorItem
            label="Trẻ em"
            value={children}
            min={0}
            onChange={(v) => handleChange("children", v)}
          />
          <SelectorItem
            label="Phòng"
            value={rooms}
            min={1}
            onChange={(v) => handleChange("rooms", v)}
          />
          <button
            className="bg-yellow-600 hover:bg-yellow-700 text-white w-full mt-3 py-1 rounded"
            onClick={() => setOpendGuest(false)}
          >
            Xong
          </button>
        </div>
      )}
    </div>
  );
};

const SelectorItem = ({ label, value, min, onChange }) => (
  <div className="flex justify-between items-center py-2">
    <span>{label}</span>
    <div className="flex items-center gap-2">
      <button
        className="w-6 h-6 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => onChange(-1)}
        disabled={value <= min}
      >
        -
      </button>
      <span className="w-4 text-center">{value}</span>
      <button
        className="w-6 h-6 bg-gray-200 rounded"
        onClick={() => onChange(1)}
      >
        +
      </button>
    </div>
  </div>
);
export default DateGuestPicker;
