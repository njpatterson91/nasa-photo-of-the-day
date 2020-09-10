import React from "react";
import styled from "styled-components";
import Img from "./img";
import About from "./about";
import Header from "./header";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: ${(pr) => pr.theme.defaultFlex};
  justify-content: ${(pr) => pr.theme.defaultJustifyContent};
  background-color: ${(pr) => pr.theme.backgroundColor};
  border-radius: ${(pr) => pr.theme.borderRadius};
`;

export default function Photo(photo, title, explanation) {
  return (
    <div>
      <Header title={photo.title} />
      <StyledDiv>
        <Img photo={photo.photo} />
        <About about={photo.explanation} />
      </StyledDiv>
    </div>
  );
}
