import {
  getCategories, getByCategory, getByName, getAllMeals,
} from '../Requests/MealsApiRequests';
import { GET_CATEGORIES, GET_ALL_MEALS, GET_BY_NAME } from '../Helpers/Helper';

const categories = () => ({
  type: GET_CATEGORIES,
  categories: getCategories,
});

const allMeals = (categories) => ({
  type: GET_ALL_MEALS,
  allMeals: getAllMeals(categories),
});

const searchMeal = (name) => ({
  type: GET_BY_NAME,
  name,
});