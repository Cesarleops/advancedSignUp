import { PaginationState } from "./PaginationContext";

type Action =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "CHANGESUB" }
  | { type: "NEWSUB"; payload: any }
  | { type: "NEWADD"; payload: any }
  | { type: "REMOVEADD"; payload: any }
  | { type: "INDEX" }
  | { type: "FINISHED" };

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
    case "NEWSUB":
      return {
        ...state,
        suscription: action.payload,
      };

    case "NEWADD":
      return {
        ...state,
        addOns: [...state.addOns, action.payload],
      };
    case "REMOVEADD":
      return {
        ...state,
        addOns: state.addOns.filter((el) => el.name !== action.payload),
      };
    case "INDEX":
      return {
        ...state,
        currentIndex: 1,
      };
    case "FINISHED":
      return {
        ...state,
        finished: true,
      };
    default:
      return state;
  }
};

export default paginationReducer;
