import CMD from "@/components/terminal/CMD";
import Dock from "@/components/terminal/Dock";
import TopBar from "@/components/terminal/TopBar";
import PasswoedWindow from "@/components/terminal/passwoed/Window";

import React from "react";

function TerminalWindow() {
  return (
    <div className="h-screen overflow-hidden terminal-window w-screen">
      {/* <img
        src="/img/macOS Ventura Dark Wallpaper YTECHB.jpg"
        alt=""
        className="fixed -z-10 items-center"
      /> */}
      {/* <TopBar />
      <CMD />
      <Dock /> */}

      {/* passwoed show */}
      <PasswoedWindow />
    </div>
  );
}

export default TerminalWindow;
