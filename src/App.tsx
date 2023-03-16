import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { ToggleThemeContext } from "./Contexts/ToggleTheme"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { darkTheme } from "./styles/themes/dark"
import { defaultTheme } from "./styles/themes/default"

function App() {
    const [theme, setTheme] = useState(defaultTheme)

    const toggleTheme = () => {
        setTheme(theme.variant === "default" ? darkTheme : defaultTheme)
    }

    return (
        <ToggleThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
                <GlobalStyle />
            </ThemeProvider>
        </ToggleThemeContext.Provider>
    )
}

export default App
