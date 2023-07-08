export const favoritesInitialState = {
  favorites: [],
};

export const favoritesKey = "favorites";

export const FAVORITE_UPDATE = "UPDATE_FAVORITES";

export const favoritesReducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case FAVORITE_UPDATE:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};
