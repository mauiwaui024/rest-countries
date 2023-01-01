import React from 'react'
import styles from "./MySelect.module.css"
import { useTheme } from '../../../hooks/ThemeContext'


function MySelect({options, defaultValue, value, onChange}) {
  
  const darkTheme = useTheme()
  
  return (
    <select className={darkTheme? styles.selectDark : ""}
    value={value}
    onChange={event =>onChange(event.target.value)}
    >
      <option className={darkTheme? styles.selectDark: ""} disabled value="">{defaultValue}</option>
      {options.map(option=>
      <option className={darkTheme? styles.selectDark: ""}
       key={option.value} value = {option.value}>
        {option.name}
      </option>
      )}
    </select>
  )
}

export default MySelect