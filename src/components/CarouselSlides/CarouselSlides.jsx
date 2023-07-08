import { Text } from "@nextui-org/react";
import React from "react";
import Carousel from "../Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import CarouselCards from "../CarouselCards/CarouselCards";
import { useModal } from "../../hooks/useModal";
import Details from "../Details/Details";
import useFavorites from "../../hooks/useFavorites";

const CarouselSlides = ({ title, data, isLoading }) => {
  const { openModal } = useModal();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <>
      <Text h2>{title}</Text>
      <Carousel>
        {!isLoading &&
          data?.map((elem) => (
            <SwiperSlide key={elem.id} style={{ background: "transparent" }}>
              <CarouselCards
                id={elem.id}
                title={elem.title}
                bg={elem.backdrop}
                footer={`🟊 ${elem.rating}`}
                textButtonA="Ver"
                textButtonB={isFavorite(elem.id) ? "♥ Eliminar": "♡ Agregar"}
                onPressedButtonA={() => {
                  openModal({
                    content: (
                      <Details
                        id={elem.id}
                        title={elem.title}
                        description={elem.description}
                        type={elem.type}
                      />
                    ),
                  });
                }}
                onPressedButtonB={() => {
                  isFavorite(elem.id)
                    ? removeFavorite(elem.id)
                    : addFavorite({id: elem.id, type: elem.type});
                }}
              />
            </SwiperSlide>
          ))}
      </Carousel>
    </>
  );
};

/*<Text h2>{title}</Text>
      <Carousel>
        {!isLoading && data?.map((elem) => (
          <SwiperSlide key={elem.id}>
            <Card>
              <Card.Body>{elem.title}</Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Carousel> */

export default CarouselSlides;
