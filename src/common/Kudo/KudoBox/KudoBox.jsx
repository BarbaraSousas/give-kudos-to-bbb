import React from "react";
import maleStudent from "../../../assets/male-student.png";
import clapping from "../../../assets/clapping.png";
import grateful from "../../../assets/grateful.png";
import Kudo from "..";
import { KudoBoxStyle } from './KudoBox.style';
import useGlobal from "../../../stateManagement/store/store";

export default function KudoBox(props) {
  const { style, display } = props;

  const [globalState, globalActions] = useGlobal();

  return (
    <KudoBoxStyle style={style}>
      <Kudo
        brooche={maleStudent}
        color="#00c1ff"
        display={display}
        points={globalState.iLearned}
        subtractPoints={() => globalActions.subtractToILearned(1)}
      />
      <Kudo
        brooche={clapping}
        display={display}
        color="#f1f148"
        points={globalState.wasAwesome}
        subtractPoints={() => globalActions.subtractToWasAwesome(1)}
      />
      <Kudo
        brooche={grateful}
        display={display}
        color="#ea2490"
        points={globalState.imGrateful}
        subtractPoints={() => globalActions.subtractToImGrateful(1)}
      />
    </KudoBoxStyle>
  );
}
