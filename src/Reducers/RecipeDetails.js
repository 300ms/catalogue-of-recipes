import { FETCH_PRODUCTS_ERROR, FETCH_MEAL_SUCCESS, RESET } from '../Constants/Types';

const initialState = {
  pending: false,
  details: {},
  error: '',
};

const RecipeDetails = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEAL_SUCCESS:
      return {
        ...state,
        pending: false,
        details: action.details,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default RecipeDetails;
