import React from "react";

type RangeIndicatorProps = {
  min: number;
  max: number;
  value: number;
};

function RangeIndicator({ min, max, value }: RangeIndicatorProps) {
  // Calculate the position of the indicator as a percentage
  const position = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative h-1 bg-gray-300">
      <div
        className="absolute left-0 top-0 h-1 bg-red-500"
        style={{ width: `${position}%` }}
      ></div>
      <div className="absolute -top-1.5" style={{ left: `${position}%` }}>
        <div className="w-3 h-3 bg-black rounded-full"></div>
      </div>
    </div>
  );
}

type SliderData = {
  todaysLow: number;
  todaysHigh: number;
  currentPrice: number;
  low52Week: number;
  high52Week: number;
};

export default function RangeSlider({ todaysLow, todaysHigh, currentPrice, low52Week, high52Week }: SliderData) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{low52Week}</span>
        <span>{high52Week}</span>
      </div>
      <RangeIndicator
        min={low52Week}
        max={high52Week}
        value={currentPrice}
      />

      <div className="flex justify-between mt-4">
        <span>{todaysLow}</span>
        <span>{todaysHigh}</span>
      </div>
      <RangeIndicator
        min={todaysLow}
        max={todaysHigh}
        value={currentPrice}
      />
    </div>
  );
}
