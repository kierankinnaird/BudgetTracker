import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ transactions }) => {
  const categories = [...new Set(transactions.map(t => t.category))];
  const data = {
    labels: categories,
    datasets: [{
      data: categories.map(cat => transactions.filter(t => t.category === cat).reduce((sum, t) => sum + Math.abs(t.amount), 0)),
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"]
    }]
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold mb-2">Spending Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default Charts;