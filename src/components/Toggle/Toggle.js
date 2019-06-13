import React from 'react'
import Switch from 'react-switch'

const Toggle = ({ isChecked, onChange }) => {
  return (
    <Switch
      aria-label="toggle light and dark mode"
      height={50}
      width={100}
      offHandleColor="#fff"
      onHandleColor="#fff"
      checked={isChecked}
      onChange={onChange}
      offColor="#000"
      onColor="#fff"
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    />
  )
}

export default Toggle
