import React from "react";
import styled from "styled-components";

import ShakerSvg from "./ShakerSvg";

type ShakerProps = {
  status?: "show" | "hide";
  handleClick: React.ReactEventHandler;
};

function Shaker({ handleClick, status = "show" }: ShakerProps) {
  return (
    <Wrapper
      style={{
        display: status === "hide" ? "none" : "unset",
      }}
    >
      <Button onClick={handleClick}>
        <ShakerSvg />
        <VisuallyHidden>Shaker</VisuallyHidden>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Button = styled.button`
  height: 60px;
  width: 60px;
  background: none;
  border: none;
  transform-origin: 70% 30%;
  transform: scale(1);
  transition: transform 300ms ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform 100ms ease-in;
  }
`;

const VisuallyHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default Shaker;
