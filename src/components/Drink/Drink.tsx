import React from "react";
import styled from "styled-components";

import { Drink as DrinkDataType } from "../../hooks/useCocktail";

type DrinkProps = {
  data: DrinkDataType;
};

function Drink({
  data: { name, instructions, image, ingredients },
}: DrinkProps): JSX.Element {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  const style = isImageLoaded
    ? { transform: "scale(1)", transition: "transform 100ms ease-out" }
    : { transform: "scale(0)" };

  return (
    <Wrapper style={style}>
      <Title>{name}</Title>
      <ImageWrapper>
        <img src={image} alt={name} onLoad={() => setIsImageLoaded(true)} />
      </ImageWrapper>
      <IngredientList>
        {ingredients.map(({ text, thumnail }, index) => (
          <IngredientItem key={`ingredient-${index}`}>
            <IngredientImageWrapper>
              <img src={thumnail} alt={text} />
            </IngredientImageWrapper>
            <IngredientText>{text}</IngredientText>
          </IngredientItem>
        ))}
      </IngredientList>
      <Instruction>{instructions}</Instruction>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
  margin: 0 auto;
  max-width: 300px;
  will-change: transform;
`;

const Title = styled.h1`
  font-size: calc(24rem / 16);
  font-weight: var(--weight-medium);
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  filter: drop-shadow(0px 2px 4px var(--color-gray-9));

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Instruction = styled.p`
  font-size: calc(16rem / 16);
  text-align: justify;
  width: 100%;
`;

const IngredientList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IngredientImageWrapper = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 4px;
  overflow: hidden;
  //   background: hsl(0 0% 60% / 0.2);
  // filter: brightness(110%) drop-shadow(0px 2px 4px var(--color-gray-9));
  filter: drop-shadow(0px 0px 2px var(--color-gray-9));

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IngredientText = styled.div`
  font-size: calc(20rem / 16);
  font-weight: var(--weight-medium);
  flex: 1;
`;

export default Drink;
