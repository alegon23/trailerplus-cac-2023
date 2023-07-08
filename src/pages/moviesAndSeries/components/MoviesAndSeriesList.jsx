import React from "react";
import CarouselCards from "../../../components/CarouselCards/CarouselCards";
import Details from "../../../components/Details/Details";
import { useModal } from "../../../hooks/useModal";
import useFavorites from "../../../hooks/useFavorites";

const MoviesAndSeriesList = ({data}) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const { openModal } = useModal();
  return (
    <>
      {data &&
        data.map((item) => (
          <CarouselCards
            key={item.id}
            id={item.id}
            title={item.title}
            bg={item.backdrop}
            footer={`🟊 ${item.rating}`}
            textButtonA="Ver"
            textButtonB={isFavorite(item.id) ? "♥ Eliminar": "♡ Agregar"}
            onPressedButtonA={() => {
              openModal({
                content: (
                  <Details
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    type={item.type}
                  />
                ),
              });
            }}
            onPressedButtonB={() => {
              isFavorite(item.id)
                ? removeFavorite(item.id)
                : addFavorite({id: item.id, type: item.type});
            }}
            style={{ marginBottom: "20px" }}
          />
        ))}
    </>
  );
};

export default MoviesAndSeriesList;
