import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const App = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div
          className="rounded-full border-none cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <BsSunFill className="text-2xl" />
        </div>
      );
    } else {
      return (
        <div
          className="rounded-full border-none cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <BsMoonStarsFill className="text-2xl" />
        </div>
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-center flex-col gap-10 items-center">
      <div className="flex flex-col">
        <h2 className="dark:text-yellow-300 text-red-500 text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          quasi!
        </h2>
      </div>
      <div>{renderThemeChanger()}</div>
    </div>
  );
};

export default App;
