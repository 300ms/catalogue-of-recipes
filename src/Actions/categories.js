import {
  getCategories,
  getRecipesError,
} from './index';

function getAllCategories() {
  return (dispatch) => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw (response.error);
        }
        dispatch(getCategories(response.categories));
      })
      .catch((error) => {
        dispatch(getRecipesError(error));
      });
  };
}

export default getAllCategories;
