import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar/SideBar";
import Content from "../components/content/Content";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const mobile = width <= widthLimit;
    const wasMobile = previousWidth <= widthLimit;

    if (mobile !== wasMobile) {
      setIsOpen(!mobile);
    }

    previousWidth = width;
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  let previousWidth = -1;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App wrapper">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Content toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default App;
