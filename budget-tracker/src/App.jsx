import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import Charts from "./components/Charts";

const App = () => {
  const [transactions, setTransactions] = useState(() => JSON.parse(localStorage.getItem("transactions")) || []);
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) || false);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const addTransaction = (transaction) => setTransactions([...transactions, transaction]);
  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100"} min-h-screen p-6`}>
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Budget Tracker</h1>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <TransactionForm addTransaction={addTransaction} />
        <Summary transactions={transactions} />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        <Charts transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
