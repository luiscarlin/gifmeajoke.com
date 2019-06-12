import React from 'react'
import Switch from 'react-switch'

const Toggle = ({ isChecked, onChange }) => {
  return (
    <label htmlFor="icon-switch">
      <Switch
        height={50}
        width={100}
        offHandleColor="#fff"
        onHandleColor="#fff"
        checked={isChecked}
        onChange={onChange}
        offColor="#000"
        onColor="#fff"
        // uncheckedIcon={
        //   <div
        //     style={{
        //       display: 'flex',
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //       height: '100%',
        //       fontSize: 15,
        //       color: 'orange',
        //       paddingRight: 2,
        //     }}
        //   >
        //     Dark
        //   </div>
        // }
        // checkedIcon={
        //   <div
        //     style={{
        //       display: 'flex',
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //       height: '100%',
        //       fontSize: 15,
        //       color: 'orange',
        //       paddingRight: 2,
        //     }}
        //   >
        //     Light
        //   </div>
        // }
      />
    </label>
  )
}

export default Toggle
