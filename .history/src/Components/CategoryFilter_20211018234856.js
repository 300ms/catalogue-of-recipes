import PropTypes from 'prop-types';
import MapCategories from '../container/MapCategories';

const Categories = ({ handleClick }) => (
  <>
    <h1 className="">Categories</h1>
    <div className="">
      <MapCategories handleClick={handleClick} />
    </div>
  </>
);

export default Categories;

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};