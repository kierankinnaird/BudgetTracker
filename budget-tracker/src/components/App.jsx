import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import Summary from "./Summary";
import Charts from "./Charts";

const App = () => {
  const [transactions, setTransactions] = useState(() => JSON.parse(localStorage.getItem("transactions")) || []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => setTransactions([...transactions, transaction]);
  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-center">Budget Tracker</h1>
        <TransactionForm addTransaction={addTransaction} />
        <Summary transactions={transactions} />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        <Charts transactions={transactions} />
      </div>
    </div>
  );
};

export default App;