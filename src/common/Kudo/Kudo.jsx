import React from "react";
import { Brooche, AvailableBrooches, KudoContainer } from "./Kudo.style";

export default function KudosBoard(props) {
  const { brooche, points, color, display, subtractPoints } = props;

  return (
    <KudoContainer>
      <Brooche
        src={brooche}
        onClick={subtractPoints}
        color={points > 0 ? color : "#c5c5c5"}
      />
      <AvailableBrooches display={display}>{points}</AvailableBrooches>
    </KudoContainer>
  );
}
