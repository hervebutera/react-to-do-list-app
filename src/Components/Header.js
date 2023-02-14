import { ReactComponent as MoonIcon } from "../Assets/images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../Assets/images/icon-sun.svg";
import { useState } from "react";

const Header = () => {
  const [themeIcon, setThemeIcon] = useState("moon");

  const body = document.body;
  const darkTheme = "dark";
  const lightTheme = "light";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const themeToggleHandler = () => {
    if (!theme || theme === lightTheme) {
      body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      setThemeIcon("sun");
    } else {
      body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      setThemeIcon("moon");
    }
  };

  return (
    <div className="header">
      <h1 className="ToDo-head">T O D O</h1>
      <span className="theme-icon" onClick={() => themeToggleHandler()}>
        {themeIcon === "moon" ? <MoonIcon /> : <SunIcon />}
      </span>
    </div>
  );
};

export default Header;
