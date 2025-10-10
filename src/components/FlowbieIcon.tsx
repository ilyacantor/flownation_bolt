import { useState, useEffect } from "react";
import FlowbieBot from "./FlowbieBot";

const flowbieImg = "/assets/u7393982445_A_small_cute_futuristic_robot_mascot_standing_on__f96e5bda-f9bb-4256-98bc-3cfa5ec07533_2.gif";

export default function FlowbieIcon() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("showTour") === "true") {
      setOpen(true);
      localStorage.removeItem("showTour");
    }
    if (localStorage.getItem("showFlowbie") === "true") {
      setOpen(true);
      localStorage.removeItem("showFlowbie");
    }

    const handleStorageChange = () => {
      if (localStorage.getItem("showFlowbie") === "true") {
        setOpen(true);
        localStorage.removeItem("showFlowbie");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    const interval = setInterval(() => {
      if (localStorage.getItem("showFlowbie") === "true") {
        setOpen(true);
        localStorage.removeItem("showFlowbie");
      }
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <img
        src={flowbieImg}
        alt="Flowbie"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-32 h-32 cursor-pointer hover:scale-110 transition-transform duration-200 drop-shadow-lg z-50 rounded-full"
      />
      {open && <FlowbieBot onClose={() => setOpen(false)} />}
    </>
  );
}
