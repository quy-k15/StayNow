import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const PriceRangeSlider = () => {
  const [range, setRange] = useState([0, 3000000]);

  return (
    <div className=" w-full max-w-sm">
      <div className="text-sm mb-3">
        {range[0].toLocaleString()}đ – {range[1].toLocaleString()}đ
      </div>

      <ReactSlider
        className="w-full h-1 bg-gray-300 rounded-md"
        thumbClassName="w-5 h-5 bg-white border-1 border-black rounded-sm cursor-pointer -translate-y-1/2 top-1/2 absolute"
        trackClassName="bg-black h-1"
        min={0}
        max={3000000}
        step={100000}
        value={range}
        onChange={(val) => setRange(val)}
        minDistance={100000}
        withTracks
        pearling
      />
    </div>
  );
};

export default PriceRangeSlider;
