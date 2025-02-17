import { useState } from "react";
import { contentsTheme } from "./contents/ThemesContext";
import ContextManagement from "./Components/ContextManagement";
import Counter from "./Components/Counter";
import FetchingData from "./Components/FectingData";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <contentsTheme.Provider value={{ theme, setTheme }}>
      <div className={theme === "light" ? "bg-white text-black p-5" : "bg-black text-white p-5"}>
        <ContextManagement />
        <Counter />
        <FetchingData />
      </div>
    </contentsTheme.Provider>
  );
};

export default App;
