// components/ThemeSwitcher.js
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";

export default function ThemeSwitcher() {
    const [colorTheme, setTheme] = useDarkMode();
    const [isDarkMode, setDarkMode] = useState(colorTheme === "dark");

    const toggleTheme = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };

    return (
        <div className="flex justify-center items-center py-4">
            <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleTheme}
                size={30}
            />
        </div>
    );
}
