import React, { useState, useEffect } from 'react';
import HandleForm from "../HandleForm";

function DisplayTable(){

  const [expenses, setExpenses] = useState([]);
  const [categoryTotal, setCategoryTotal] = useState({});
  const [totalExpenses, setTotalExpenses] = useState(0);

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
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  }

  return (
    <div>
      <HandleForm addExpense={(expense) => addExpense({ ...expense, title: expense.nameExpenditure })} />
      <table>
        <thead>
          <tr>
            <th>Catégories</th>
            <th>Titre</th>
            <th>Dépenses (€)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.category}</td>
              <td>{expense.name}</td>
              <td>{expense.expenditure}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total des dépenses mensuelles par catégorie(€)</td>
            <td></td>
            <td>
              {Object.keys(categoryTotal).map((category, index) => (
                <div key={index}>{category}: {categoryTotal[category]}</div>
              ))}
            </td>
          </tr>
          <tr>
            <td>Total des dépenses(€)</td>
            <td></td>
            <td>{totalExpenses}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DisplayTable;
