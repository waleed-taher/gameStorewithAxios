"use client";

import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <>
      {resolvedTheme === "dark" ? (
        <BsSun
          className="w-full h-full px-2 py-2 cursor-pointer rounded-full bg-black text-white"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiMoon
          className="w-full h-full px-2 py-2 cursor-pointer rounded-full bg-black text-white"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
