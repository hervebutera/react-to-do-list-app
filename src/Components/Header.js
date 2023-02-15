import { ReactComponent as MoonIcon } from "../Assets/images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../Assets/images/icon-sun.svg";
import { useState } from "react";

const Header = () => {
  const body = document.body;
  const darkTheme = "dark";
  const lightTheme = "light";
  let theme;

  if (localStorage["theme"]) {
    theme = localStorage.getItem("theme");
  } else {
    theme = lightTheme;
  }

  const [themeIcon, setThemeIcon] = useState(theme);

  if (theme === darkTheme) {
    body.classList.add(darkTheme);
  } else {
    body.classList.add(lightTheme);
  }

  const themeToggleHandler = () => {
    if (theme === lightTheme) {
      body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", darkTheme);
      setThemeIcon(darkTheme);
    } else {
      body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", lightTheme);
      setThemeIcon(lightTheme);
    }
  };

  return (
    <div className="header">
      <h1 className="ToDo-head">T O D O</h1>
      <span className="theme-icon" onClick={themeToggleHandler}>
        {themeIcon === "light" ? <MoonIcon /> : <SunIcon />}
      </span>
    </div>
  );
};

export default Header;
