import { useState } from "react";
import DesktopStepper from "../desktopStepper";
import MobileStepper from "../mobileStepper";

const Stepper = () => {
  const isMobile = window.innerWidth < 600;

  return <div>{isMobile ? <MobileStepper /> : <DesktopStepper />}</div>;
};

export default Stepper;
