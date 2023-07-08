import React, { useEffect, useReducer } from "react";
import { useAuth } from "../core/auth/hooks/useAuth";
import {
  FAVORITE_UPDATE,
  favoritesInitialState,
  favoritesKey,
  favoritesReducer,
} from "../reducers/favoritesReducer";
import { getFavorites } from "../services/firebase.service";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesProvider = ({ children }) => {
  const { state: authState } = useAuth();

  const [state, dispatch] = useReducer(favoritesReducer, favoritesInitialState);

  useEffect(() => {
    const initialize = async () => {
      localStorage.removeItem(favoritesKey);
      const userID = authState?.user?.uid;
      if (!userID) return;
      const favorites = await getFavorites(userID);
      if (!favorites) return;
      dispatch({ type: FAVORITE_UPDATE, payload: favorites });
    };

    initialize();
  }),
    [authState];

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
