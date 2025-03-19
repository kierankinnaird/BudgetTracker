const TransactionList = ({ transactions, deleteTransaction }) => {
    return (
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-bold mb-2">Transactions</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between border-b py-2">
              <span>{transaction.category} - ${transaction.amount} ({transaction.date})</span>
              <button onClick={() => deleteTransaction(transaction.id)} className="text-red-500">X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TransactionList;