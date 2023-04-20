import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Stepper from "./components/stepper";
import FormPages from "./components/formPages";
import { PaginationProvider } from "./context/PaginationContext";

const App = () => {
  return (
    <>
      <PaginationProvider>
        <Stepper />
        <FormPages />
      </PaginationProvider>
    </>
  );
};

export default App;
