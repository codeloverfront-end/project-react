import useformReducer from '../../reducer/formReducer';
import { useState } from 'react';

function HandleForm({ addExpense }) {
  const [state, dispatch] = useformReducer();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name.trim(),
      value: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nameExpenditure, expenditure, category } = state;

    const newErrors = {};
    if (!nameExpenditure.trim()) {
      newErrors.nameExpenditure = "Le titre de la dépense est requis";
    }
    if (!expenditure.trim()) {
      newErrors.expenditure = "Le montant de la dépense est requis";
    }
    if (category === 'default') {
      newErrors.category = "Veuillez choisir une catégorie";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addExpense({ name: nameExpenditure, expenditure: expenditure, category: category });

    dispatch({ type: 'SET_FIELD', field: 'nameExpenditure', value: '' });
    dispatch({ type: 'SET_FIELD', field: 'expenditure', value: '' });
    dispatch({ type: 'SET_FIELD', field: 'category', value: 'default' });

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Indiquez votre nouvelle dépense</label>
      <input
        type="text"
        id="name"
        name="nameExpenditure"
        value={state.nameExpenditure}
        placeholder="Titre de la dépense..."
        onChange={handleChange}
      />
      {errors.nameExpenditure && <p style={{ color: 'red' }}>{errors.nameExpenditure}</p>}
      <br />

      <label htmlFor="expenditure">Montant de votre dépense</label>
      <input
        type="text"
        id="expenditure"
        name="expenditure"
        value={state.expenditure}
        placeholder="Valeur du montant..."
        onChange={handleChange}
      />
      {errors.expenditure && <p style={{ color: 'red' }}>{errors.expenditure}</p>}
      <br />

      <select name="category" value={state.category} onChange={handleChange}>
        <option value="default">Choisir une catégorie...</option>
        <option value="Alimentation">Alimentation</option>
        <option value="Logement">Logement</option>
        <option value="Transport">Transport</option>
        <option value="Divertissement">Divertissement</option>
        <option value="Sante">Santé</option>
        <option value="Education">Education</option>
        <option value="Autres">Autres</option>
      </select>
      {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
      <br />

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default HandleForm;
