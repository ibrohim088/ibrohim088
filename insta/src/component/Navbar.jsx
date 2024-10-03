import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [data, setData] = useState();

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white border-r-[1px] border-r-slate-500 shadow-sm w-[200px] h-[800px] fixed top-0">
      <div className="h-[800px]  dark:bg-slate-900">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="mt-4">
            <h1 className="font-bold pl-4 text-2xl dark:-white dark:text-white">
              <Link>Instagram</Link>
            </h1>
            <div className="mt-[40px]">
              <div className="flex w-[170px] h-[45px] dark:text-white mt-5 pt-1 pl-3.5 hover:bg-gray-200 rounded-lg">
                <svg
                  className="dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
                </svg>
                <h2 className="font-bold px-2 py-1.5 text-25px font-mono">
                  <Link to={"/"}>Home</Link>
                </h2>
              </div>
              <div className="flex w-[170px] h-[45px] dark:text-white mt-5 pt-1 pl-3.5 hover:bg-gray-200 rounded-lg ">
                <svg
                  className="dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
                <h2 className="px-2 py-1.5 text-15px font-mono">
                  <Link to={"/search"}>Search</Link>
                </h2>
              </div>
              <div className="flex w-[170px] h-[45px] dark:text-white mt-5 pt-1 pl-3.5 hover:bg-gray-200 rounded-lg ">
                <svg
                  className="dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  width="28px"
                  height="28px"
                  viewBox="0 0 554.883 554.883"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path d="M277.441,554.883c153.227,0,277.442-124.215,277.442-277.442C554.883,124.214,430.668,0,277.441,0    C124.214,0,0,124.214,0,277.441C0,430.668,124.214,554.883,277.441,554.883z M222.199,222.199l197.022-86.54L332.684,332.68    l-197.021,86.541L222.199,222.199z" />
                      <circle cx="277.441" cy="274.274" r="31.827" />
                    </g>
                  </g>
                </svg>
                <h2 className="px-2 py-1.5 text-15px font-mono">
                  <Link to={"/explor"}>Explor</Link>
                </h2>
              </div>
              <div className="flex w-[170px] h-[45px] dark:text-white mt-5 pt-1 pl-3.5 hover:bg-gray-200 rounded-lg ">
                <svg
                  className="dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M13.34 4.13L20.26 16H4v-1C4 9.48 8.05 4.92 13.34 4.13zM33.26 16L22.57 16 15.57 4 26.26 4zM46 15v1H35.57l-7-12H35C41.08 4 46 8.92 46 15zM4 18v17c0 6.08 4.92 11 11 11h20c6.08 0 11-4.92 11-11V18H4zM31 32.19l-7.99 4.54C21.68 37.49 20 36.55 20 35.04v-9.08c0-1.51 1.68-2.45 3.01-1.69L31 28.81C32.33 29.56 32.33 31.44 31 32.19z"></path>
                </svg>
                <h2 className="px-2 py-1.5 text-15px font-mono">
                  <Link to={"/reels"}>Reels</Link>
                </h2>
              </div>
              <div className="flex w-[170px] h-[45px] dark:text-white mt-5 pt-1 pl-3.5 hover:bg-gray-200 rounded-lg ">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 13.8153 2.48451 15.5196 3.33127 16.9883C3.50372 17.2874 3.5333 17.6516 3.38777 17.9647L2.53406 19.8016C2.00986 20.7933 2.72736 22 3.86159 22H12C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.0002 13.3C8.71817 13.3 9.3002 12.7179 9.3002 12C9.3002 11.282 8.71817 10.7 8.0002 10.7C7.28223 10.7 6.7002 11.282 6.7002 12C6.7002 12.7179 7.28223 13.3 8.0002 13.3ZM16.0002 13.3C16.7182 13.3 17.3002 12.7179 17.3002 12C17.3002 11.282 16.7182 10.7 16.0002 10.7C15.2822 10.7 14.7002 11.282 14.7002 12C14.7002 12.7179 15.2822 13.3 16.0002 13.3ZM12.0002 13.3C12.7182 13.3 13.3002 12.7179 13.3002 12C13.3002 11.282 12.7182 10.7 12.0002 10.7C11.2822 10.7 10.7002 11.282 10.7002 12C10.7002 12.7179 11.2822 13.3 12.0002 13.3Z"
                    fill="#000000"/>
                </svg>

                <h2 className="px-2 py-1.5 text-15px font-mono">
                  <Link to={"/messages"}>Messages</Link>
                </h2>
              </div>
              <div className="flex w-[170px] h-[45px] dark:text-white mt-5 pt-1 pl-3.5 hover:bg-gray-200 rounded-lg ">
                <svg
                  className="dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                </svg>
                <h2 className="px-2 py-1.5 text-15px font-mono">
                  <Link to={"/notifications"}>Notifications</Link>
                </h2>
              </div>
              <div className="flex w-[170px] h-[45px] dark:text-white mt-5 pt-1 pl-3.5 hover:bg-gray-200 rounded-lg ">
                <svg
                  className="dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="3"
                  strokeLinecap="butt"
                  strokeLinejoin="bevel"
                >
                  <path d="M3 3h18v18H3zM12 8v8m-4-4h8" />
                </svg>
                <h2 className="px-2 py-1.5 text-15px font-mono">
                  <Link to={"/create"}>Create</Link>
                </h2>
              </div>
              <div className="flex w-[170px] h-[60px] dark:text-white mt-5 pt-1 pl-3.5 hover:bg-gray-200 rounded-lg ">
                <img
                  className="w-[50px] h-[50px] rounded-full dark:fill-white"
                  src="src/img/nastanetchasmechti.jpg"
                  alt=""
                />
                <h2 className="px-2 py-3.5 text-15px font-mono">
                  <Link to={"/profil"}>Profil</Link>
                </h2>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex space-x-6 text-xl">
            <h1></h1>
          </div>
        </div>
        <div className="flex px-8 py-[50px]">
          <button
            onClick={() => handleSwitchTheme()}
            className="bg-gray-950 text-white rounded-lg px-5 py-1 dark:bg-white dark:text-black"
          >
            {theme === "Light" ? "Dark" : "Light"}
          </button>
        </div>
        <div className="dark:bg-slate-800"></div>
      </div>
    </div>
  );
};

export default Navbar;
