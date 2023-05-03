const SET_CATEGORIES = "SET_CATEGORIES";
const SET_NEW_CATEGORY = "SET_NEW_CATEGORY";

let initialState = {
    categories: [],
};

const categoriesManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_NEW_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category]
      };
    default:
      return state;
  }
};

export const setCategories = (categories) => ({ type: SET_CATEGORIES, categories });
export const setNewCategory = (category) => ({ type: SET_NEW_CATEGORY, category });

export default categoriesManagerReducer;
