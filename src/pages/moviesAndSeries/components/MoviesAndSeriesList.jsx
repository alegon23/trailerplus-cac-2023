import React from "react";
import CarouselCards from "../../../components/CarouselCards/CarouselCards";
import Details from "../../../components/Details/Details";
import { useModal } from "../../../hooks/useModal";

const MoviesAndSeriesList = ({data}) => {
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
            textButtonB="Fav"
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
            style={{ marginBottom: "20px" }}
          />
        ))}
    </>
  );
};

export default MoviesAndSeriesList;
