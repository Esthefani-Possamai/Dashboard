import React, { createContext, useState, useContext, ReactNode, ReactChild, ReactChildren } from "react";
import dark from "../style/themes/dark";
import light from "../style/themes/light";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
  children?: React. ReactNode;
}


interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    sucess: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext> ({} as IThemeContext);


const ThemeProvider: React.FC<IThemeContext> = ({ children }) => {
  
  const [theme, setTheme] = useState<ITheme>(dark);

  const toggleTheme = () => {
    if (theme.title === 'dark'){
      setTheme(light);
    }
    else {
      setTheme(dark);
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context
}

export { ThemeProvider, useTheme}
