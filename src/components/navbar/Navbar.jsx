import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import styles from "./Navbar.module.css"
import { useTheme, useThemeUpdate } from '../../hooks/ThemeContext'
import * as  hiIcons from "react-icons/hi";



function Navbar() {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  return (
    <div className={darkTheme?styles.wrapperDark: styles.wrapper}>
    
       <div className={styles.navContainer}>
       <Link to = "/"> <h1 className={darkTheme?styles.dark: ""}>Where in the world?</h1></Link>
        
        <h5 onClick={toggleTheme} className={darkTheme?styles.dark: ""}>{darkTheme? <hiIcons.HiMoon fill="white" size={20}/>: <hiIcons.HiOutlineMoon size={20} />} Dark Mode</h5>
       </div>
    </div>
  )
}

export default Navbar