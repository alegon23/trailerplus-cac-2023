import { Button, Card, Col, Row, Spacer, Text } from "@nextui-org/react";
import React, { useState } from "react";

const CarouselCards = ({
  title,
  bg,
  footer,
  id,
  onPressedButtonA = (data) => {},
  onPressedButtonB = (data) => {},
  textButtonA = "",
  textButtonB = "",
  colorButtonA = "secondary",
  colorButtonB = "error",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
  };

  const handleClickBtnA = (e) => {
    onPressedButtonA({
      event: e,
      id,
      title,
      bg,
      footer,
    });
  };
  return (
    <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card.Header
        css={{
          position: "absolute",
          backgroundColor: "#00000066",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Text b>{title}</Text>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={bg}
          width="100%"
          height="100%"
          objectFit="cover"
          alt={title}
        />
      </Card.Body>
      <Card.Footer
        css={{
          transform: `${isHovered ? "translateY(0)" : "translateY(100%)"}`,
          transition: "transform 0.3s ease-in-out",
          position: "absolute",
          bgBlur: "#dedede66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
        }}
      >
        <Row
          css={{
            transform: `${isHovered ? "translateY(0)" : "translateY(200%)"}`,
            transition: "transform 0.3s ease-in-out",
            transitionDelay: "0.2s",
          }}
        >
          <Col>
            <Text size={14} weight="bold">
              {footer}
            </Text>
          </Col>
          <Button size="xs" color={colorButtonA} onPress={handleClickBtnA}>
            {textButtonA}
          </Button>
          <Spacer x={0.5} />
          <Button size="xs" color={colorButtonB} onPress={onPressedButtonB}>
            {textButtonB}
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CarouselCards;
