import { useState } from "react";
import CheckboxItem from "./CheckboxItem";
import Section from "./Section";
import PriceRangeSlider from "./PriceRangeSlider";

const Subtitle = () => {
  const [openSections, setOpenSections] = useState({
    discount: true,
    price: true,
    businessType: true,
    amenities: true,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex-col gap-10">
      <Section
        title="Giảm giá"
        isOpen={openSections.discount}
        onToggle={() => toggleSection("discount")}
      >
        <CheckboxItem label="Có thể hoàn tiền đầy đủ" />
        <CheckboxItem label="Không cần thanh toán trước" />
        <CheckboxItem label="Các cơ sở kinh doanh có ưu đãi đặc biệt" />
      </Section>

      <hr className="my-3" />

      <Section
        title="Giá"
        isOpen={openSections.price}
        onToggle={() => toggleSection("price")}
      >
        <PriceRangeSlider />
      </Section>

      <hr className="my-3" />

     <Section
        title="Loại cơ sở kinh doanh"
        isOpen={openSections.businessType}
        onToggle={() => toggleSection("businessType")}
      >
        <CheckboxItem label="Khách sạn" />
        <CheckboxItem label="Nhà nghỉ" />
        <CheckboxItem label="Villa" />
      </Section>
      <hr className="my-3" />
      <Section
        title="Tiện nghi"
        isOpen={openSections.amenities}
        onToggle={() => toggleSection("amenities")}
      >
        <CheckboxItem label="Wifi miễn phí" />
        <CheckboxItem label="Bao gồm bữa sáng" />
        <CheckboxItem label="Bể bơi" />
      </Section>
    </div>
  );
};

export default Subtitle;
