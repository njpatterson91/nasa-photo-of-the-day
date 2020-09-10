import React from "react";
import styled from "styled-components";

export default function Img(props) {
  const { photo } = props;
  console.log(photo);
  return (
    <div>
      <img alt={"test"} src={photo}></img>
    </div>
  );
}
