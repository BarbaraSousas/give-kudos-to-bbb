import React from "react";
import { Container } from "./GoToTop.style";

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export default function GoToTop() {
  return (
    <Container onClick={() => goTop()}>
      Voltar ao topo
    </Container>
  );
}
