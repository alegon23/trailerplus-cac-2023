import React, { useContext } from "react";
import { useAuth } from "../core/auth/hooks/useAuth";
import { FavoritesContext } from "../context/FavoritesContext";
import { updateFavorites } from "../services/firebase.service";
import { favoritesKey } from "../reducers/favoritesReducer";

const useFavorites = () => {
  const { state: authState } = useAuth();
  const { state, dispatch } = useContext(FavoritesContext);

  const updateInDB = async (favorites) => {
    await updateFavorites(authState.user.uid, favorites);
  };

  const addFavorite = async (favorite) => {
    dispatch({
      type: "UPDATE_FAVORITES",
      payload: [...state.favorites, favorite],
    });

    localStorage.setItem(
      favoritesKey,
      JSON.stringify([...state.favorites, favorite])
    );

    await updateInDB([...state.favorites, favorite]);
  };

  const removeFavorite = async (favorite) => {
    const newFavorites = state.favorites.filter((f) => f.id !== favorite);

    dispatch({
      type: "UPDATE_FAVORITES",
      payload: newFavorites,
    });

    localStorage.setItem(favoritesKey, JSON.stringify(newFavorites));

    await updateInDB(newFavorites);
  };

  const clearFavorites = () => {
    localStorage.removeItem(favoritesKey);
  };

  //const isFavorite = (favorite) => state.favorites.includes(favorite.id);
  const isFavorite = (favorite) => {
    const array = state.favorites.map((fav) => fav.id === favorite);
    return array.includes(true);
  };

  return {
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
    isFavorite,
  };
};

export default useFavorites;
