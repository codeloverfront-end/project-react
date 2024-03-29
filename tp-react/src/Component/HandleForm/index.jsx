import React, { useState } from 'react';

function HandleForm() {
    const [nameExpenditure, setNameExpenditure] = useState('');
    const [expenditure, setExpenditure] = useState('');
    const [value, setValue] = useState('option1');


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setExpenditure('');
        setValue('option1');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Indiquez votre nouvelle dépense</label>
            <input
                type="text"
                id="name"
                value={nameExpenditure}
                placeholder="Description..."
                onChange={(e) => setNameExpenditure(e.target.value)}
            />
            <label htmlFor="name">Montant de votre dépense</label>
             <input
                type="number"
                id="name"
                value={expenditure}
                placeholder="Valeur du montant"
                onChange={(e) => setExpenditure(e.target.value)}
            />
            <select value={value} onChange={handleChange}>
                <option value="option1">Alimentation</option>
                <option value="option2">Logement</option>
                <option value="option3">Transport</option>
                <option value="option4">Divertissement</option>
                <option value="option5">Santé</option>
                <option value="option6">Education</option>
                <option value="option7">Autres</option>
            </select>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default HandleForm;
