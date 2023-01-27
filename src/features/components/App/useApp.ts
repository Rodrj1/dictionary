import { useEffect, useState } from "react";

export const useApp = () => {
  const [keyword, setKeyword] = useState("");
  const [font, setFont] = useState("'Libre Baskerville', serif");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "light");
    } else setTheme("light");
  }, []);

  useEffect(() => {
    if (theme != "") {
      const defaultTheme = theme == "dark" ? "dark" : "light";
      document.body.classList.toggle(defaultTheme);
    }
  }, [theme]);

  const handleTheme = () => {
    const changeTheme = theme == "dark" ? "light" : "dark";
    setTheme(changeTheme);
    document.body.classList.toggle(theme);
  };
  return {
    keyword,
    setKeyword,
    font,
    setFont,
    theme,
    handleTheme,
  };
};
