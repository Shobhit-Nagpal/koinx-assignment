import { useEffect, useRef, memo, useState } from "react";
import { Badge } from "./ui/badge";
import { COINGECKO_URL, cn, formatINR, formatUSD } from "../lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

function TradingViewWidget() {
  const containerRef = useRef<HTMLInputElement>(null);

  const [tokenData, setTokenData] = useState<any>({});
  const [tokenDataUSD, setTokenDataUSD] = useState<any>(0);
  const [tokenDataINR, setTokenDataINR] = useState<any>(0);
  const [tokenDataImg, setTokenDataImg] = useState<string>("");

  useEffect(() => {
    async function getCoinData() {
      try {
        const resp = await fetch(
          `${COINGECKO_URL}/coins/bitcoin?sparkline=true&developer_data=false&community_data=false&tickers=false`,
        );
        const result = await resp.json();
        setTokenDataImg(result.image.small);
        setTokenDataUSD(result.market_data.current_price.usd);
        setTokenDataINR(result.market_data.current_price.inr);
        setTokenData(result);
      } catch (err) {
        console.error(err);
      }
    }

    getCoinData();

    if (!containerRef.current) {
      console.error("Container ref is not attached to a DOM element.");
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "W",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
    }`;
    containerRef.current.appendChild(script);
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-white p-6 shadow rounded-xl">
      <div className="flex items-center justify-start gap-8">
        <div className="flex items-center justify-start gap-1 md:gap-3">
          <img src={tokenDataImg} alt="Token image" />
          <h2 className="text-3xl font-bold text-left">
            {tokenData.name || "Ethereum"}
          </h2>
          <p className="text-md text-gray-500 font-semibold">
            {String(tokenData.symbol).toUpperCase()}
          </p>
        </div>
        <Badge className="rounded-lg  px-1 py-1 sm:px-4 sm:py-2 bg-gray-500 font-medium text-sm lg:text-lg">
          Rank #{tokenData.market_cap_rank || 2}
        </Badge>
      </div>
      <div className="flex flex-col items-start justify-center mt-4">
        <div className="flex items-center justify-start gap-5">
          <h1 className="text-3xl font-bold">{formatUSD(tokenDataUSD)}</h1>
          <Badge
            className={cn(
              1 > 0
                ? "bg-green-100 text-green-500 hover:bg-green-100 hover:text-green-500"
                : "bg-red-500 text-red-500 hover:bg-red-500 hover:text-red-500",
              "px-2 py-1 rounded-lg text-lg",
            )}
          >
            {1 > 0 ? <ChevronUp /> : <ChevronDown />}
            {parseFloat("23.455").toFixed(2) + "%"}
          </Badge>
        </div>
        <h2 className="text-xl font-medium mt-4">{formatINR(tokenDataINR)}</h2>
      </div>
      <div
        className="tradingview-widget-container mt-8"
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(TradingViewWidget);
