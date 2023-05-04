import "./App.scss";
import Stepper from "./components/stepper";
import FormPages from "./components/formPages";
import { PaginationProvider } from "./context/PaginationContext";

const App = () => {
  return (
    <>
      <PaginationProvider>
        <div className="mainContainer">
          <Stepper />
          <FormPages />
        </div>
      </PaginationProvider>
    </>
  );
};

export default App;
