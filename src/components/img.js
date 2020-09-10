import React from "react";
import styled from "styled-components";

const StyledImg = styled.div`
  max-width: ${(pr) => pr.theme.divWidth};
  img {
    max-width: 100%;
    padding: 5vw;
  }
`;

export default function Img(props) {
  const { photo } = props;
  console.log(photo);
  return (
    <StyledImg>
      <img alt={"test"} src={photo}></img>
    </StyledImg>
  );
}
