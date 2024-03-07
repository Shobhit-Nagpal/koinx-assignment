import { Info } from "lucide-react";
import { Slider } from "./ui/slider";

type PerformanceMetricProps = {
  highLabel: string;
  highValue: string;
  lowLabel: string;
  lowValue: string;
};

function PerformanceMetric({
  highLabel,
  highValue,
  lowLabel,
  lowValue,
}: PerformanceMetricProps) {
  const todaysRange = {
    todaysLow: 46930.22,
    todaysHigh: 49343.83,
    currentPrice: 48637.83,
    low52Week: 16930.22,
    high52Week: 49743.83,
  };
  return (
    <div className="flex justify-between items-center w-full">
      <div className="p-4">
        <p className="text-md font-medium text-gray-500">{lowLabel}</p>
        <p className="text-xl font-medium text-gray-500">{lowValue}</p>
      </div>
      <Slider
        defaultValue={[todaysRange.currentPrice]}
        max={todaysRange.todaysHigh}
        min={todaysRange.todaysLow}
      />
      <div className="p-4">
        <p className="text-md font-medium text-gray-500">{highLabel}</p>
        <p className="text-xl font-medium text-gray-500">{highValue}</p>
      </div>
    </div>
  );
}

type FundamentalMetricProps = {
  title: string;
  data: {
    label: string;
    value: string;
    change?: string;
    timeFrame?: string;
  }[];
};

function FundamentalMetric({ title, data }: FundamentalMetricProps) {
  const columnOne = data.slice(0, data.length / 2);
  const columnTwo = data.slice(data.length / 2);
  return (
    <div className="mt-4">
      <h3 className="text-2xl font-bold text-gray-600 mb-8 flex items-center">
        {title}{" "}
        <span className="inline-block ml-2">
          <Info />
        </span>
      </h3>
      {/* Change flex-row to flex-col for mobile screens */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-5">
        <div className="w-full">
          {columnOne.map(({ label, value, change, timeFrame }, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center py-1 gap-x-40">
                <p className="text-md font-semibold text-gray-600">{label}</p>
                <div className="text-right">
                  <p className="text-sm font-semibold">{value}</p>
                  {change && <p className="text-xs text-gray-500">{change}</p>}
                  {timeFrame && (
                    <p className="text-xs text-gray-500">{timeFrame}</p>
                  )}
                </div>
              </div>
              <hr className="my-4 border-t border-gray-300" />
            </div>
          ))}
        </div>

        <div className="w-full lg:mt-0 mt-8">
          {columnTwo.map(({ label, value, change, timeFrame }, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center py-1 gap-x-40">
                <p className="text-md font-semibold text-gray-600">{label}</p>
                <div className="text-right">
                  <p className="text-sm font-semibold">{value}</p>
                  {change && <p className="text-xs text-gray-500">{change}</p>}
                  {timeFrame && (
                    <p className="text-xs text-gray-500">{timeFrame}</p>
                  )}
                </div>
              </div>
              <hr className="my-4 border-t border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type CryptoDataProps = {
  performance: PerformanceMetricProps[];
  fundamentals: {
    title: string;
    data: FundamentalMetricProps["data"];
  };
};

export default function PerformanceWidget({
  performance,
  fundamentals,
}: CryptoDataProps) {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div>
        <h2 className="text-3xl font-bold text-left">Performance</h2>
        {performance.map((metric, idx) => (
          <div className="flex flex-row items-center justify-between" key={idx}>
            <PerformanceMetric {...metric} />
          </div>
        ))}
      </div>
      <div className="border-t mt-4 pt-4">
        <FundamentalMetric {...fundamentals} />
      </div>
    </div>
  );
}
