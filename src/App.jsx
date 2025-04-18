import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css'; // if you are using CSS

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter(exp => exp.id !== id);
    setExpenses(updated);
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.description.toLowerCase().includes(search.toLowerCase()) ||
    exp.category.toLowerCase().includes(search.toLowerCase())
  );

  const total = filteredExpenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default App;
