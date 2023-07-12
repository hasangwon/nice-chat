import React, { createContext } from "react";
import { GlobalInitialData } from "./GlobalInitialData";
import GlobalType from "./GlobalType";

const GlobalContext = createContext<{
  state: GlobalType;
  dispatch: React.Dispatch<any>;
}>({
  state: GlobalInitialData,
  dispatch: () => {},
});

export { GlobalContext };
