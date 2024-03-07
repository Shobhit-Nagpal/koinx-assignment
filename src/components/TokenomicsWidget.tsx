import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CustomLegend from "./CustomLegend";

export default function TokenomicsWidget() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#007bff", "#ffc107"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section className="bg-white p-6 rounded-xl">
      <h2 className="text-3xl font-bold text-left">Tokenomics</h2>
      <div className="flex flex-col items-start justify-center gap-5">
        <h2 className="text-2xl font-bold text-left mt-12">
          Initial Distribution
        </h2>
        <div className="flex items-center justify-center gap-5">
          <div className="w-64 h-64">
            <Doughnut data={data} options={options} />
          </div>
          <CustomLegend />
        </div>
        <p className="text-lg text-left mt-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </section>
  );
}
