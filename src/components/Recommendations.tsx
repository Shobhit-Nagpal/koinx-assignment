import TrendingCoinsCarousel from "./TrendingCoinsCarousel";

export default function Recommendations() {
  return (
    <section className="bg-white p-6 rounded-xl w-full">
      <div>
        <div>
          <h1 className="text-3xl font-semibold mb-8">You May Also Like</h1>
          <TrendingCoinsCarousel />
        </div>

        <div className="mt-8">
          <h1 className="text-3xl font-semibold mb-8">Trending Coins</h1>
          <TrendingCoinsCarousel />
        </div>
      </div>
    </section>
  );
}
