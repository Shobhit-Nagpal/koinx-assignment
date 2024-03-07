import { useState } from "react";
import "./App.css";
import CategoryTabs from "./components/CategoryTabs";
import Navbar from "./components/Navbar";
import TradingViewWidget from "./components/TradingViewWidget";
import PerformanceWidget from "./components/PerformanceWidget";
import Team from "./components/Team";
import TrendingCoinsWidget from "./components/TrendingCoinsWidget";
import CallToActionWidget from "./components/CallToActionWidget";
import About from "./components/About";
import TokenomicsWidget from "./components/TokenomicsWidget";
import SentimentWidget from "./components/SentimentWidget";
import Recommendations from "./components/Recommendations";

function App() {
  const [activeTab, setActiveTab] = useState<string>("Overview");

  const categories: string[] = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  const performanceData = [
    {
      highLabel: "Today's High",
      highValue: "46,930.22",
      lowLabel: "Today's Low",
      lowValue: "46,930.22",
    },
    {
      highLabel: "52W High",
      highValue: "46,930.22",
      lowLabel: "52W Low",
      lowValue: "46,930.22",
    },
  ];

  const fundamentalsData = {
    title: "Fundamentals",
    data: [
      {
        label: "Bitcoin Price",
        value: "$16,815.46",
      },
      {
        label: "24h Low / 24h High",
        value: "$16,382.07 / $16,874.12",
      },
      {
        label: "7d Low / 7d High",
        value: "$16,382.07 / $16,874.12",
      },
      {
        label: "Trading Volume",
        value: "$23,249,202,782",
      },
      {
        label: "Market Cap Rank",
        value: "#1",
      },
      {
        label: "Market Cap",
        value: "$323,507,290,047",
      },
      {
        label: "Market Cap Dominance",
        value: "38.343%",
      },
      {
        label: "Volume / Market Cap",
        value: "0.0718",
      },
      {
        label: "All-Time High",
        value: "$69,044.77 -75.6%",
      },
      {
        label: "All-Time Low",
        value: "$67.81 24729.1%",
      },
    ],
  };

const estimatesData = {
    buy: 76,
    hold: 8,
    sell: 16
  };
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col items-start justify-center bg-gray-100 p-12 gap-8 md:flex-row">
        <section className="flex flex-col justify-center gap-8 w-2/3">
          <TradingViewWidget />
          <CategoryTabs
            categories={categories}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
          <PerformanceWidget
            performance={performanceData}
            fundamentals={fundamentalsData}
          />
          <SentimentWidget buy={estimatesData.buy} hold={estimatesData.hold} sell={estimatesData.sell} />
          <About />
          <TokenomicsWidget />
          <Team />
          <Recommendations />
        </section>
        <section className="flex flex-col items-center justify-center gap-5 w-1/3">
          <CallToActionWidget />
          <TrendingCoinsWidget />
        </section>
      </div>
    </div>
  );
}

export default App;
