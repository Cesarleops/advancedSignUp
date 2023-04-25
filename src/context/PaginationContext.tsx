import { createContext, useReducer } from "react";
import paginationReducer from "./paginationReducer";

export interface PaginationState {
  isMonthly: Boolean;
  currentIndex: number;
  addOns: { name?: string; price?: number }[];
  suscription: {
    name: string;
    price: number;
  };
  steps: {
    step: number;
    subtitle: string;
    text: string;
  }[];
}
export const pagesInitialState: PaginationState = {
  currentIndex: 0,
  addOns: [],
  suscription: {
    name: "",
    price: 0,
  },
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
  isMonthly: true,
};

export interface PaginationContextProps {
  pagesState: PaginationState;
  nextPage: () => void;
  prevPage: () => void;
  toggle: () => void;
  setSuscription: (payload: {}) => void;
  setAddOns: (payload: {}) => void;
  removeAdd: (payload: string) => void;
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

  const toggle = () => {
    dispatch({
      type: "CHANGESUB",
    });
  };
  const setAddOns = (payload: {}) => {
    dispatch({
      type: "NEWADD",
      payload,
    });
  };
  const removeAdd = (payload: string) => {
    dispatch({
      type: "REMOVEADD",
      payload,
    });
  };
  const setSuscription = (payload: {}) => {
    dispatch({
      type: "NEWSUB",
      payload,
    });
  };

  return (
    <PaginationContext.Provider
      value={{
        pagesState,
        nextPage,
        prevPage,
        toggle,
        setAddOns,
        setSuscription,
        removeAdd,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
