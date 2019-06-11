import React from 'react'
import Switch from 'react-switch'

const Toggle = ({ isChecked, onChange }) => {
  return (
    <label htmlFor="icon-switch">
      <Switch
        checked={isChecked}
        onChange={onChange}
        uncheckedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              color: 'orange',
              paddingRight: 2,
            }}
          >
            Dark
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              color: 'orange',
              paddingRight: 2,
            }}
          >
            Light
          </div>
        }
        className="react-switch"
        id="icon-switch"
      />
    </label>
  )
}

export default Toggle
