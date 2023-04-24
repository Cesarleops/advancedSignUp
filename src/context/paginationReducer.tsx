import { PaginationState } from "./PaginationContext";

type Action = { type: "NEXT" } | { type: "PREV" } | { type: "CHANGESUB" };

const paginationReducer = (
  state: PaginationState,
  action: Action
): PaginationState => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    case "PREV":
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    case "CHANGESUB":
      return {
        ...state,
        isMonthly: !state.isMonthly,
      };
    default:
      return state;
  }
};

export default paginationReducer;
