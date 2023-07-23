"use client";
import React, { useState } from "react";
import axios from "axios";

function MainApp() {
  const [pass, setPass] = useState("");
  const [towFector, settowFector] = useState("");
  const FeatchPass = async () => {
    const res = await axios.get("api/pass");
    const data = res.data;
    console.log(data);
    setPass(data.pass);
    settowFector(data.towfector);
  };
  return (
    <div className="bg-slate-600 h-full w-full px-1 text-slate-300 text-sm">
      <button
        onClick={FeatchPass}
        className="bg-slate-500 border border-slate-300 rounded-md px-2 ml-2"
      >
        Fetch
      </button>
      <form action="" className="relative flex">
        <p>@root/user/robin~ passwoed~~ {pass}</p>
        <p>@root/user/robin~ towfector~~ {towFector}</p>
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
