import { createContext } from "react"

const ThemeContext = createContext<unknown>({
    setSnackbar: {},
    setShowLoading: {},
});

export default ThemeContext
