import React from "react";
import styled from "styled-components";
import Img from "./img";
import About from "./about";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: grey;

  img {
    max-width: 50vw;
    padding: 5rem;
  }
  p {
    max-width: 50vw;
    padding: 5rem;
    text-align: left;
    margin: 0 auto;
  }
`;

export default function Photo(photo, title, explanation) {
  return (
    <div>
      <h2>{photo.title}</h2>
      <hr />
      <StyledDiv>
        <Img photo={photo.photo} />
        <About about={photo.explanation} />
      </StyledDiv>
      <p>© Nathaniel Patterson 2020 </p>
    </div>
  );
}
