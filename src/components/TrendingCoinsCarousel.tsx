import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ChevronDown, ChevronUp } from "lucide-react";
import { COINGECKO_URL, cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

interface TrendingCoinProps {
  thumbnail: string;
  symbol: string;
  percentage: number;
  usd_price: string;
  sparkline: string;
}

function TrendingCoin({
  thumbnail,
  symbol,
  percentage,
  usd_price,
  sparkline,
}: TrendingCoinProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-full h-full">
      <div className="flex items-center justify-between">
        <img src={thumbnail} alt={`${symbol} thumbnail`} className="w-8 h-8" />{" "}
        {/* Resize as needed */}
        <h3 className="text-lg font-semibold">{symbol.toUpperCase()}</h3>
        <Badge
          className={cn(
            percentage >= 0
              ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
              : "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800",
            "text-sm px-2 py-0.5 rounded",
          )}
        >
          {percentage >= 0 ? <ChevronUp /> : <ChevronDown />}
          {percentage.toFixed(2)}%
        </Badge>
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <h2 className="text-2xl font-semibold">
          ${parseFloat(usd_price.slice(1)).toFixed(2)}
        </h2>
        <img src={sparkline} alt={`${symbol} sparkline`} className="w-full" />{" "}
        {/* Ensure sparkline takes full width */}
      </div>
    </div>
  );
}

export default function TrendingCoinsCarousel() {
  const [trendingCoins, setTrendingCoins] = useState<any>([]);
  useEffect(() => {
    async function getTrendingCoins() {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const resp = await fetch(`${COINGECKO_URL}/search/trending`, options);
        const result = await resp.json();
        setTrendingCoins(result.coins);
      } catch (err) {
        console.error(err);
      }
    }

    getTrendingCoins();
  }, []);
  return (
    <Carousel>
      <CarouselContent>
        {trendingCoins.map((coin: any, idx: number) => (
          <CarouselItem key={idx} className="sm:basis-1/2 md:basis-1/3 px-2 flex-shrink-0">
            <TrendingCoin
              thumbnail={coin.item.small}
              symbol={coin.item.symbol}
              percentage={coin.item.data.price_change_percentage_24h.usd}
              usd_price={coin.item.data.price}
              sparkline={String(coin.item.data.sparkline)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
