import React from "react";
import { BrothersGrid, BrothersItem } from "./BrothersBoard.style";
import Brothers from "../../common/Brothers";
import { brothers } from "./BrothersValues";

export default function BrothersBoards() {
  return (
    <BrothersGrid>
      {brothers.map((item) => {
        return (
          <BrothersItem>
            <Brothers info={item} />
          </BrothersItem>
        );
      })}
    </BrothersGrid>
  );
}
