import React, { useEffect, useState } from "react";
import { themes } from "../themes/Themes";
import { Accesibilty, GlobalStyle, StyledApp } from "./header.styles";

interface HeaderProps {
  title: string;
  icon: string;
}

const Header: React.FC<HeaderProps> = ({ title, icon }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isDarkMode", String(isDarkMode));
  }, [isDarkMode]);

  const handleChangeBackgroundColor = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  return (
    <>
      <GlobalStyle theme={currentTheme} isCorrect={null} />
      <div className="darkModeContainer">
        <Accesibilty>
          <img
            src={icon}
            alt={title}
            style={{
              backgroundColor:
                title === "HTML"
                  ? "#FFF1E9"
                  : title === "CSS"
                  ? "#E0FDEF"
                  : title === "Accessibility"
                  ? "#F6E7FF"
                  : title === "JavaScript"
                  ? "#EBF0FF"
                  : "transparent",
            }}
          />
          <p style={{ fontSize: "28px" }}>{title}</p>
        </Accesibilty>

        <div className="toggleContainer">
          <div className="sunImage">
            <img src={currentTheme.backgroundimg.sunimgcolor} alt="Sun Icon" />
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={handleChangeBackgroundColor}
            />
            <div className="slider round"></div>
          </label>
          <div className="moonImage">
            <img src={currentTheme.backgroundimg.moonimgcolor} alt="Moon Icon" />
          </div>
        </div>
      </div>
      <StyledApp />
    </>
  );
};

export default Header;
