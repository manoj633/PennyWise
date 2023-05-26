import React, { useState } from "react";

const FinanceTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = () => {
    if (description && amount) {
      const newTransaction = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
      };

      setTransactions([...transactions, newTransaction]);
      setDescription("");
      setAmount("");
    }
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const getTotalBalance = () => {
    const balance = transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
    return balance.toFixed(2);
  };

  return (
    <div>
      <h1>Personal Finance Tracker</h1>
      <div>
        <h2>Add Transaction</h2>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addTransaction}>Add</button>
      </div>
      <div>
        <h2>Transaction History</h2>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <span>{transaction.description}</span>
                <span>{transaction.amount}</span>
                <button onClick={() => deleteTransaction(transaction.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2>Total Balance</h2>
        <p>{getTotalBalance()}</p>
      </div>
    </div>
  );
};

export default FinanceTracker;
