import produce from "immer";
import { isArray, isBoolean, isObject, isString } from "lodash";
import { GlobalActionType } from "./GlobalActionType";
import GlobalType from "./GlobalType";

const GlobalReducer = (
  state: GlobalType,
  action: {
    type: GlobalActionType;
    payload: unknown;
  }
) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case "SET_ADMIN_INFO": {
        if (isObject(action.payload)) {
          draft.adminInfo = action.payload;
        }
        break;
      }
      default:
        break;
    }
  });
};

export { GlobalReducer };
