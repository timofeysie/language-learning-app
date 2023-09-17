import { useMemo, useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import ChapterPage from "./components/pages/ChapterPage";
import { Routes, Route } from "react-router-dom";
import { LightTheme, DarkTheme } from "./config/Theme";
import ThemeContext from "./context/ThemeContext";
import { ThemeProvider } from "@mui/material";

function App() {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );
    const theme = useMemo(() => {
        return mode === "light" ? LightTheme : DarkTheme;
    }, [mode]);
    const themeContext: unknown = {
        toggleColorMode: colorMode.toggleColorMode,
    };

    return (
        <>
            <ThemeContext.Provider value={themeContext}>
                <ThemeProvider theme={theme}>
                    <div className="card">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/chapter/:filename"
                                element={<ChapterPage />}
                            />
                        </Routes>
                    </div>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
