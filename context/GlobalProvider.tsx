import { useReducer } from "react";

import { GlobalContext } from "./GlobalContext";
import { GlobalInitialData } from "./GlobalInitialData";
import { GlobalReducer } from "./GlobalReducer";

const SidebarProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(GlobalReducer, GlobalInitialData);
  const value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default SidebarProvider;
