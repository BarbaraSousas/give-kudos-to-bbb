import React from "react";
import {
  KudoSection,
  Title,
  TitleBox,
  Date,
} from "./KudosBoard.style";
import KudoBox from "../../common/Kudo/KudoBox";

export default function KudosBoard() {
  const date = "Atualizado em 23/04/2019";

  return (
    <KudoSection>
      <TitleBox>
        <Title className="title">Selos Disponíveis</Title>
        <Date>{date}</Date>
      </TitleBox>
      <KudoBox
        subtractPoints={false}
      />
    </KudoSection>
  );
}
