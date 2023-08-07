import { createContext, useReducer } from "react"
import { ThemeReducher } from "./reducher/theme.reducher"
import { TOGGLE_THEME } from "./ActionType";

export const ThemeContext = createContext(); 

const initstate = {
    theme: 'light'
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(ThemeReducher,initstate);

    const toogleTheme = (theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        dispatch({type: TOGGLE_THEME, payload: newTheme});
    }

    return (
        <ThemeContext.Provider
           value={{...state, toogleTheme}}
        >

            {children}
        </ThemeContext.Provider>
    )
}