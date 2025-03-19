const Summary = ({ transactions }) => {
    const income = transactions
      .filter(t => t.amount > 0 && t.category === "Salary") // ✅ Only count salary
      .reduce((acc, t) => acc + t.amount, 0);
  
    const expenses = transactions
      .filter(t => t.amount < 0) // ✅ All negative values are expenses
      .reduce((acc, t) => acc + t.amount, 0);
  
    const balance = transactions.reduce((acc, t) => acc + t.amount, 0); // ✅ Overall balance
  
    return (
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-bold mb-2">Summary</h2>
        <p>Salary Income: <span className="text-green-500">${income}</span></p>
        <p>Expenses: <span className="text-red-500">${expenses}</span></p>
        <p>Balance: <span className={balance >= 0 ? "text-green-500" : "text-red-500"}>${balance}</span></p>
      </div>
    );
  };
  
  export default Summary;