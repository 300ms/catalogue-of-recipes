import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getRecipe from '../Actions/singleRecipe';
import RecipeImage from '../Components/RecipeImage';
import RecipeDescription from '../Components/RecipeDescription';
import { resetSelected } from '../Actions/index';
import {
  getImg, getArea, getInstructions, getIngredient, getName, categoryName, getProductsPending,
} from '../Constants/Index';

function RecipeDetails(props) {
  const {
    img, area, ingredients, match, fetchMeal, name, category, resetSelected,
  } = props;
  const { id } = match.params;
  useEffect(() => {
    fetchMeal(id);
  }, [fetchMeal, id]);

  return (
    <div className="item-d">
      <div className="item-c">
        <RecipeImage className="img-item shadow" src={img} name={name} />
        <div className="w-50">
          <RecipeDescription category={category} className="ingredients" area={area} ingredients={ingredients} />
          <div className="ingredients-buttons">
            <Link to="/">
              <button type="button" onClick={resetSelected} className="shadow btn">Home</button>
            </Link>
            <Link to={`/category/${category}`}>
              <button type="button" onClick={resetSelected} className="shadow btn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { singleMeal } = state;
  const { details } = singleMeal;
  return (
    {
      img: getImg(details),
      area: getArea(details),
      instructions: getInstructions(details),
      ingredients: getIngredient(details),
      name: getName(details),
      category: categoryName(details),
      pending: getProductsPending(details),
    }
  );
};

const mapDispatchToProps = {
  fetchMeal: getRecipe,
  resetSelected,
};

RecipeDetails.defaultProps = {
  img: '',
  name: '',
  category: '',
  area: '',
  ingredients: [''],
};

RecipeDetails.propTypes = {
  img: PropTypes.string,
  area: PropTypes.string,
  fetchMeal: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(String),
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  name: PropTypes.string,
  category: PropTypes.string,
  resetSelected: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
