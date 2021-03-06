import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCategories from '../Actions/categories';
import Category from '../Components/Category';
import {
  getProductsError,
  getCategoriesList,
  categoryName,
  categoryDetails,
  categoryImage,
} from '../Constants/Index';

function AllCategories(props) {
  const { getCategories, categories } = props;
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <div className="container">
        {categories.map((el) => <Link key={el.idCategory} to={`/category/${el.strCategory}`}><Category name={categoryName(el)} description={categoryDetails(el)} src={categoryImage(el)} /></Link>)}
      </div>
    </div>
  );
}

AllCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      idCategory: PropTypes.string.isRequired,
      strCategory: PropTypes.string.isRequired,
      strCategoryDescription: PropTypes.string.isRequired,
      strCategoryThumb: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getCategories,
};

const mapStateToProps = (state) => {
  const { categories } = state;
  return (
    {
      error: getProductsError(categories),
      categories: getCategoriesList(categories),
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
