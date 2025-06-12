import { useState, useEffect } from "react";
import { FaUserGroup } from "react-icons/fa6";

const GuestRoomPicker = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

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
    <div className="relative w-1/3">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded cursor-pointer"
        style={{
          backgroundColor: "#6F6F4B",
          color: "#ffffff",
        }}
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

      {/* Popup chọn số lượng */}
      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-2 w-full bg-white rounded-xl shadow-lg p-4 text-sm">
          <SelectorItem label="Người lớn" value={adults} min={1} onChange={(v) => handleChange("adults", v)} />
          <SelectorItem label="Trẻ em" value={children} min={0} onChange={(v) => handleChange("children", v)} />
          <SelectorItem label="Phòng" value={rooms} min={1} onChange={(v) => handleChange("rooms", v)} />
          <button
            className="bg-yellow-600 hover:bg-yellow-700 text-white w-full mt-3 py-1 rounded"
            onClick={() => setIsOpen(false)}
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

export default GuestRoomPicker;
