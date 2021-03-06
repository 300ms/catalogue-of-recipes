import {
  getSingleRecipe,
  getRecipesError,
} from './index';

function getRecipe(id) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw (response.error);
        }
        dispatch(getSingleRecipe(response.meals[0]));
        return response;
      })
      .catch((error) => {
        dispatch(getRecipesError(error));
      });
  };
}

export default getRecipe;
