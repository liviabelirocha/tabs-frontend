import React from "react";

import { Container } from "./styles";

function GearInfo(props) {
  return (
    <Container>
      <h2>
        {props.type} - {props.title}
      </h2>
      <img src={props.img} alt={props.title} />
    </Container>
  );
}

export default GearInfo;
