import React from "react";
import AppBar from "./terminal-App/AppBar";
import MainApp from "./terminal-App/MainApp";

function CMD() {
  return (
    <div className="w-[40rem] h-96 ml-7 mt-9 shadow-xl border border-slate-600 rounded-md overflow-hidden">
      <AppBar />
      <MainApp />
    </div>
  );
}

export default CMD;
