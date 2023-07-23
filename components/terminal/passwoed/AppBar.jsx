import React from "react";

function AppBar() {
  return (
    <div className="h-7 bg-slate-700 flex items-center px-2 text-white text-sm">
      <p>@root</p>

      <div className="flex gap-2 items-center ml-auto">
        <div className="rounded-full h-4 w-4 bg-red-600 cursor-pointer"></div>
        <div className="rounded-full h-4 w-4 bg-green-500 cursor-pointer"></div>
        <div className="rounded-full h-4 w-4 bg-yellow-500 cursor-pointer"></div>
      </div>
    </div>
  );
}

export default AppBar;
