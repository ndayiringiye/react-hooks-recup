import { useContext } from "react";
import { contentsTheme } from "../contents/ThemesContext";

const ContextManagement = () => {
    const { theme, setTheme } = useContext(contentsTheme);

    return (
        <div className={theme === "light" ? "bg-white text-black p-5" : "bg-black text-white p-5"}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            
            
            <button 
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="border p-2 mt-3"
            >
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
};

export default ContextManagement;
