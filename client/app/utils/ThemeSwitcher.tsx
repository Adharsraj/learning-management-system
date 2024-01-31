"use client";
import { useTheme } from "next-themes";
import React, { FC, useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
type Props = {};

const ThemeSwitcher: FC<Props> = (Props) => {
  const [mounded, setMounded] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounded(true);
  });
  if (!mounded) {
    return null;
  }
  return (
    <div className="">
      {theme === "light" ? (
        <BiMoon
          className="cursor-pointer"
          fill="black"
          size={25}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BiSun
          className="cursor-pointer"
          size={25}
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
