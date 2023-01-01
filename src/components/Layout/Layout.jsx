import React from 'react'
import styles from "./Layout.module.css"
import { useTheme } from "../../hooks/ThemeContext"

export default function Layout({children}) {
  const darkTheme = useTheme()
  return (
    <div className={darkTheme?styles.containerLayoutDark: styles.containerLayout}>
    {/* <div className={styles.container}> */}
    {children}
    </div>
  )
}
