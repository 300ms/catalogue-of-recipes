import PropTypes from 'prop-types';
import RecipeList from '../Containers/RecipeList';

const Recipe = ({ recipes, clickOnRecipeDetail }) => (
  <>
    <h1 className="titles t-meal">Meals</h1>
    <div className="flex meal-container">
      {
        recipes !== undefined
          ? <RecipeList recipes={recipes} clickOnRecipeDetail={clickOnRecipeDetail} />
          : <h2>Loading...</h2>
      }
    </div>
  </>
);

export default Recipe;

Recipe.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
  clickOnRecipeDetail: PropTypes.func.isRequired,
};