/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetails = ({
  category, area, ingredients, className,
}) => (
  <div className={className}>
    <p>
      <span className="prop-title">
        Category&nbsp;:&nbsp;
      </span>
      <span>
        {category}
      </span>
    </p>
    <hr />
    <p>
      <span className="prop-title">
        Area&nbsp;:&nbsp;
      </span>
      <span>
        {area}
      </span>
    </p>
    <hr />
    <p className="prop-title">
      Ingredients&nbsp;:&nbsp;
    </p>
    {ingredients.map((el) => (
      <span key={Math.random() * 1000}>
        {el}
        {' '}
        |
        {' '}
      </span>
    ))}
    <hr />
  </div>
);

RecipeDetails.defaultProps = {
  className: 'w-50',
};

RecipeDetails.propTypes = {
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
  className: PropTypes.string,
};

export default RecipeDetails;