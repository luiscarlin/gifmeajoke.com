import React from 'react'
import { ThemeProvider } from 'styled-components'
import colors from './styles/colors'
import useLocalStorage from './hooks/useLocalStorage'

export const ThemeContext = React.createContext()

export const ThemeState = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('mode', 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={colors[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
