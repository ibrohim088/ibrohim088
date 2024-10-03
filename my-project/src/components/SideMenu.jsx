import React from "react";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUser,
} from "react-icons/fa";

const SideMenu = () => {
  const [data, setData] = useState();

  
  const [theme, setTheme] = useState("light");

  useEffect(() => {

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const btndark = () => {
    setTheme(theme === "dark" ? "light" : " dark");
  };

  return (
    <div className="h-screen w-60 fixed left-36 bg-white border-r-2 border-gray-200 flex flex-col p-4 space-y-6">
      <div className="darck:bg-blue-gray-800">
        <p  className="text-2xl font-bold text-blue-500">X</p>
        <div className="darck:bg-blue-gray-900">
          <div className="text-[15px]">
          <button
            onClick={() => btndark()}
            className="bg-black text-white rounded-lg px-5 py-1 dark:bg-black dark:text-white"
          >
            {theme === "Light" ? "Dark" : "Light"}
          </button>
          </div>
          <div className="dark:bg-black"></div>
        </div>
      </div>
      <nav className="flex flex-col space-y-4">
        <a
          href="/"
          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaHome className="text-xl" />
          <span className="text-lg font-semibold">Home</span>
        </a>
        <a
          href="/explor"
          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaHashtag className="text-xl" />
          <span className="text-lg font-semibold">Explore</span>
        </a>
        <a
          href="/notifications"
          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaBell className="text-xl" />
          <span className="text-lg font-semibold">Notifications</span>
        </a>
        <a
          href="/messages"
          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaEnvelope className="text-xl" />
          <span className="text-lg font-semibold">Messages</span>
        </a>
        <a
          href="/bookmarks"
          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaBookmark className="text-xl" />
          <span className="text-lg font-semibold">Bookmarks</span>
        </a>
        <a
          href="/profile"
          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaUser className="text-xl" />
          <span className="text-lg font-semibold">Profile</span>
        </a>
      </nav>
      <button className="bg-blue-500 text-white font-bold p-3 rounded-full w-full mt-auto hover:bg-blue-600 transition-colors">
        Tweet
      </button>
    </div>
  );
};

export default SideMenu;
