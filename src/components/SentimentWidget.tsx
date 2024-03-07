import { Newspaper, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import EventCard from "./EventCard";

type AnalystEstimate = {
  buy: number;
  hold: number;
  sell: number;
};

export default function SentimentWidget({ buy, hold, sell }: AnalystEstimate) {
  const eventCardsData = [
    {
      icon: <Newspaper />,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nibh nec dui accumsan vulputate at id lectus..",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nibh nec dui accumsan vulputate at id lectus. Curabitur iaculis ut urna vel gravida. Nullam suscipit tellus ut semper varius. Donec ut nisi eu risus facilisis ullamcorper vitae a turpis. Morbi dictum consecteturitn",
      bgColor: "bg-blue",
    },
    {
      icon: <TrendingUp />,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nibh nec dui accumsan vulputate at id lectus..",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nibh nec dui accumsan vulputate at id lectus. Curabitur iaculis ut urna vel gravida. Nullam suscipit tellus ut semper varius. Donec ut nisi eu risus facilisis ullamcorper vitae a turpis. Morbi dictum consecteturitn",
      bgColor: "bg-green",
    },
    {
      icon: <Newspaper />,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nibh nec dui accumsan vulputate at id lectus..",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nibh nec dui accumsan vulputate at id lectus. Curabitur iaculis ut urna vel gravida. Nullam suscipit tellus ut semper varius. Donec ut nisi eu risus facilisis ullamcorper vitae a turpis. Morbi dictum consecteturitn",
      bgColor: "bg-blue",
    },
    {
      icon: <TrendingUp />,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nibh nec dui accumsan vulputate at id lectus..",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nibh nec dui accumsan vulputate at id lectus. Curabitur iaculis ut urna vel gravida. Nullam suscipit tellus ut semper varius. Donec ut nisi eu risus facilisis ullamcorper vitae a turpis. Morbi dictum consecteturitn",
      bgColor: "bg-green",
    },
  ];
  return (
    <section className="bg-white p-6 rounded-xl">
      <h2 className="text-3xl font-bold text-left mt-2">Sentiment</h2>

      <div>
        <h2 className="text-2xl font-semibold text-gray-600 text-left my-4">
          Key Events
        </h2>
        <div>
          <Carousel>
            <CarouselContent>
              {eventCardsData.map((event, idx) => (
                <CarouselItem className="basis-1/2" key={idx}>
                  <EventCard
                    icon={event.icon}
                    heading={event.heading}
                    description={event.description}
                    bgColor={event.bgColor}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-600 text-left my-4">
        Analyst Estimates
      </h2>
      <div className="flex items-center mt-4">
        {/* Circular div for Buy sentiment */}
        <div className="flex justify-center items-center h-36 w-36 bg-green-100 rounded-full">
          <h1 className="text-4xl text-green-600 font-medium">{buy}%</h1>
        </div>
        {/* Progress bars */}
        <div className="flex flex-col flex-1 ml-10 space-y-4">
          {/* Buy Progress Bar */}
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600">Buy</span>
            <div className="w-1/2 ml-4 rounded h-2.5">
              <div
                className="bg-green-600 h-2.5 rounded"
                style={{ width: `${buy}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600 ml-4">
              {buy}%
            </span>
          </div>
          {/* Hold Progress Bar */}
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600">Hold</span>
            <div className="w-1/2 ml-4 rounded h-2.5">
              <div
                className="bg-yellow-500 h-2.5 rounded"
                style={{ width: `${hold}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600 ml-4">
              {hold}%
            </span>
          </div>
          {/* Sell Progress Bar */}
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600">Sell</span>
            <div className="w-1/2 ml-4 rounded h-2.5">
              <div
                className="bg-red-600 h-2.5 rounded"
                style={{ width: `${sell}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600 ml-4">
              {sell}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
