import React from "react";
import styled from "styled-components";

const StyledImg = styled.div`
  border-radius: 10px;
  max-width: 40%;
  img {
    max-width: 100%;
    border-radius: 10px;
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
