import React, { useState, useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import Switch from 'react-switch'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [toggle, setToggle] = useState(() => theme === 'dark')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setToggle(true)
    } else {
      setTheme('light')
      setToggle(false)
    }
  }

  return (
    <Switch
      onChange={toggleTheme}
      checked={toggle}
      uncheckedIcon={false}
      checkedIcon={false}
      offColor="#000"
      onColor="#fff"
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    />
  )
}

export default ThemeToggle
