import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions/actions";

const initialState = {
  iLearned: 2,
  imGrateful: 2,
  wasAwesome: 2
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;