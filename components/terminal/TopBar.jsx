"use client";
import React, { useEffect, useState } from "react";

function TopBar() {
  const d = new Date();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const date = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    const timer = setInterval(() => {
      setCurrentTime(date);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  return (
    <>
      <div className="h-6 bg-[#ffffff50] fixed top-0 backdrop-blur-3xl flex px-2 w-full items-center justify-between text-white">
        <div className="flex items-center gap-3.5 text-sm ">
          <span>File</span>
          <span>System Info</span>
          <span>New Window</span>
          <span>About</span>
        </div>
        <p className="text-sm">{currentTime}</p>
      </div>
    </>
  );
}
export default TopBar;
