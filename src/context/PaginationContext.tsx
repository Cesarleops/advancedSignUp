import { createContext, useReducer } from "react";
import paginationReducer from "./paginationReducer";

export interface PaginationState {
  suscriptionType: string;
  currentIndex: number;
  steps: {
    step: number;
    subtitle: string;
    text: string;
  }[];
}
export const pagesInitialState: PaginationState = {
  currentIndex: 0,
  steps: [
    {
      step: 1,
      subtitle: "STEP 1",
      text: "YOUR INFO",
    },
    {
      step: 2,
      subtitle: "STEP 2",
      text: "SELECT PLAN",
    },
    {
      step: 3,
      subtitle: "STEP 3",
      text: "ADD-ONS",
    },
    {
      step: 4,
      subtitle: "STEP 4",
      text: "SUMMARY",
    },
  ],
  suscriptionType: "monthly",
};

export interface PaginationContextProps {
  pagesState: PaginationState;
  nextPage: () => void;
  prevPage: () => void;
}

export const PaginationContext = createContext({} as PaginationContextProps);

export const PaginationProvider = ({ children }: any) => {
  const [pagesState, dispatch] = useReducer(
    paginationReducer,
    pagesInitialState
  );
  const nextPage = () => {
    if (pagesState.currentIndex >= pagesState.steps.length - 1) return;
    dispatch({
      type: "NEXT",
    });
  };

  const prevPage = () => {
    dispatch({
      type: "PREV",
    });
  };

  return (
    <PaginationContext.Provider value={{ pagesState, nextPage, prevPage }}>
      {children}
    </PaginationContext.Provider>
  );
};
