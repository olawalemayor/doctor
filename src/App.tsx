import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/content";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    window.screen.width >= 1440 ? setShowSidebar(true) : setShowSidebar(false);
  }, [setShowSidebar]);

  return (
    <div className="App">
      <header className="">
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      </header>
      <div className="flex">
        {showSidebar && (
          <div className="w-full xl:w-[300px]">
            <div className="fixed h-full w-full xl:w-[300px] bg-[#1572A1]">
              <Sidebar />
            </div>
          </div>
        )}
        <div className="w-full xl:w-[calc(100vw-300px)] h-full px-[35px] py-[10px]">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
