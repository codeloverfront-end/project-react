import {useReducer} from "react";

const initialState = {
    nameExpenditure: '',
    expenditure: '',
    category: 'default',
  };
  
  function formReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_FIELD':
        return {
          ...state,
          [action.field]: action.value
        };
      default:
        return state;
    }
  }
 

  const useFormReducer = () => {
    return useReducer(formReducer, initialState)
}

export default useFormReducer;