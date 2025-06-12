import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Section = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center gap-1 cursor-pointer select-none"
        onClick={onToggle}
      >
        <p className="font-medium">{title}</p>
        {isOpen ? <FaAngleUp />:  <FaAngleDown />}
      </div>
      {isOpen && children}
    </div>
  );
};

export default Section;
