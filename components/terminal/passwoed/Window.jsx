import React from "react";
import AppBar from "@/components/terminal/passwoed/AppBar";
import MainApp from "@/components/terminal/passwoed/MainApp";

function PasswoedWindow() {
  return (
    <div className="w-[40rem] h-96 ml-7 mt-2 shadow-xl border border-slate-600 rounded-md overflow-hidden">
      <AppBar />
      <MainApp />
    </div>
  );
}

export default PasswoedWindow;
