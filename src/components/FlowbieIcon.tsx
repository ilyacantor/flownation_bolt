import { useState, useEffect } from "react";
import FlowbieBot from "./FlowbieBot";
import flowbieImg from "./flowbie.png";

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
        className="fixed bottom-6 right-6 w-16 h-16 cursor-pointer hover:scale-110 transition-transform duration-200 drop-shadow-lg z-50 rounded-full"
      />
      {open && <FlowbieBot onClose={() => setOpen(false)} />}
    </>
  );
}
