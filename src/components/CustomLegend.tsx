const data = {
  labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ['#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#36A2EB', '#FFCE56']
    }
  ]
};

export default function CustomLegend() {
return (
    <ul className="flex flex-col gap-5 justify-center">
      {
        data.labels.map((label, index) => (
          <li key={index} className="flex items-center mr-3">
            <span className={`h-3 w-3 rounded-full mr-2`} style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></span>
            <span className="text-lg">{label}</span>
          </li>
        ))
      }
    </ul>
  );
}
