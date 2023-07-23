import React from "react";

function MainApp() {
  return (
    <div className="bg-slate-600 h-full w-full px-1 text-slate-300 text-sm">
      <form action="" className="relative flex">
        <p>@root/user/robin~ </p>
        <input
          id="cmdinput"
          className="cmdinput bg-transparent w-full"
          type="text"
          autoComplete="off"
        />
        <label
          htmlFor="cmdinput"
          className="h-screen w-full absolute top-full left-0"
        ></label>
      </form>
    </div>
  );
}

export default MainApp;
