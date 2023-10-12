import React, { useState, useEffect } from "react";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mobile from "./components/Mobile/Mobile";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 801);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 801);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        {isMobile ? (
          <div className="desktop-view">
            <Sidebar />
            <Header />
            <Project />
          </div>
        ) : (
          <div className="mobile-view">
            <Mobile />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
