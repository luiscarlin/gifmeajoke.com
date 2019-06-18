import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import colors from './styles/colors'

export const ThemeContext = React.createContext()

export const ThemeState = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={colors[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
