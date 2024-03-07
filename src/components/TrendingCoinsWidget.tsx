import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { COINGECKO_URL, cn } from "../lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TrendingCoinsWidget() {
  const [trendingCoins, setTrendingCoins] = useState<any>([]);
  useEffect(() => {
    //set trending coints
    async function getTrendingCoins() {
      const options = {
        headers: {
        "Content-Type": "application/json",
        }
      };

      try {
        const resp = await fetch(`${COINGECKO_URL}/search/trending`, options); 
        const result = await resp.json();
        setTrendingCoins(result.coins.slice(0,3));
      } catch(err) {
        console.error(err);
      }
    }
    
    getTrendingCoins();
  }, []);
  return (
    <section className="bg-white p-6 w-full rounded-xl">
      <h2 className="text-3xl font-bold text-left">Trending Coins (24h)</h2>
      <div className="p-2 mt-2">
      {trendingCoins.map((coin: any) => (
        <div className="flex items-center justify-between mt-8 gap-3" key={coin.item.coin_id}>
        <div className="flex items-center gap-3">
          <img src={coin.item.small} alt={"Coin icon"}/>
          <h3 className="font-semibold text-lg">{`${coin.item.name}(${coin.item.symbol})`}</h3>
        </div>
          <Badge className={cn(parseInt(coin.item.data.price_change_percentage_24h.usd) > 0 ? "bg-green-100 text-green-500 hover:bg-green-100 hover:text-green-500" : "bg-red-100 text-red-500 hover:bg-red-100 hover:text-red-500", "px-2 py-1 rounded-lg text-lg")}>{parseInt(coin.item.data.price_change_percentage_24h.usd) > 0 ? <ChevronUp /> : <ChevronDown />}{parseFloat(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}</Badge>
        </div>
      ))}
      </div>
    </section>
  );
}
