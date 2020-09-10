import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  max-width: 40%;
  p {
    max-width: 50vw;
    padding: 5rem;
    text-align: left;
  }
`;

export default function About(about) {
  return (
    <StyledAbout>
      <h2>About</h2>
      <p>{about.about}</p>
    </StyledAbout>
  );
}
