import React, { useState, useEffect } from 'react';
import HandleForm from "../HandleForm";

function DisplayTable(){

  const [expenses, setExpenses] = useState([]);
  const [categoryTotal, setCategoryTotal] = useState({});
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    const calculateTotalByCategory = () => {
      const totals = {};
      let total = 0;
      expenses.forEach(expense => {
        if (totals[expense.category]) {
          totals[expense.category] += parseInt(expense.expenditure);
        } else {
          totals[expense.category] = parseInt(expense.expenditure);
        }
        total += parseInt(expense.expenditure);
      });
      setCategoryTotal(totals);
      setTotalExpenses(total);
    };

    calculateTotalByCategory();

    // Filtrer les dépenses lorsque la catégorie sélectionnée change
    if (selectedCategory) {
      const filtered = expenses.filter(expense => expense.category === selectedCategory);
      setFilteredExpenses(filtered);
    } else {
      setFilteredExpenses(expenses);
    }
  }, [expenses, selectedCategory]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  const getCategoryTotal = (category) => {
    return categoryTotal[category] || 0;
  }

  return (
    <div>
      <HandleForm addExpense={(expense) => addExpense({ ...expense, title: expense.nameExpenditure })} />
      <div>
        <label htmlFor="categoryFilter">Filtrer par catégorie: </label>
        <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Toutes les catégories</option>
          {Object.keys(categoryTotal).map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Catégories</th>
            <th>Titre</th>
            <th>Dépenses (€)</th>
          </tr>
        </thead>
        <tbody>
          {selectedCategory ? (
            filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.category}</td>
                <td>{expense.name}</td>
                <td>{expense.expenditure}</td>
              </tr>
            ))
          ) : (
            expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.category}</td>
                <td>{expense.name}</td>
                <td>{expense.expenditure}</td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>Total des dépenses(€)</td>
            <td></td>
            <td>{selectedCategory ? getCategoryTotal(selectedCategory) : totalExpenses}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DisplayTable;
