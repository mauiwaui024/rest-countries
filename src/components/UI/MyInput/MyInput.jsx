import React from 'react'
import styles from "./MyInput.module.css"
import { useTheme } from '../../../hooks/ThemeContext'
function MyInput(props) {



  const darkTheme = useTheme()
  return (
    <input className={darkTheme? styles.myInputDark : styles.myInput}
      
     {...props}/>
  )
}

export default MyInput