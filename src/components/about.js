import React from "react";
import styled from "styled-components";

export default function About(about) {
  console.log(about);
  return (
    <div>
      <h2>About</h2>
      <p>{about.about}</p>
    </div>
  );
}
