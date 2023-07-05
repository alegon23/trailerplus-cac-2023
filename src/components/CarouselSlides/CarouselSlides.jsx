import { Text } from '@nextui-org/react'
import React from 'react'
import Carousel from '../Carousel/Carousel'
import { SwiperSlide } from 'swiper/react'
import CarouselCards from '../CarouselCards/CarouselCards'
import { useModal } from '../../hooks/useModal'
import Details from '../Details/Details'

const CarouselSlides = ({title, data, isLoading}) => {
  const { openModal } = useModal();
  return (
    <>
    <Text h2>{title}</Text>
    <Carousel>
        {!isLoading && data?.map((elem) => (
            <SwiperSlide key={elem.id} style={{background: "transparent"}}>
                <CarouselCards id={elem.id} title={elem.title} bg={elem.backdrop} footer={`🟊 ${elem.rating}`} textButtonA="Ver" textButtonB="Fav" onPressedButtonA={() => {
                  openModal({
                    content: <Details id={elem.id} title={elem.title} description={elem.description}/>,
                  });
                }}/>
            </SwiperSlide>
        ))}
    </Carousel>
    </>
  )
}

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

export default CarouselSlides