import React from 'react'
import styles from "./CountryCard.module.css"
import {useNavigate} from "react-router-dom"
import { useTheme } from '../../hooks/ThemeContext'
export default function CountryCard ({flag, name, population, region, capital, code}) {
  
  
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/${code}`;
    navigate(path);
}

const darkTheme = useTheme()
  
  return (
    <div onClick={routeChange} className={darkTheme?styles.cardContainerDark: styles.cardContainer}>
        <div className={styles.cardImage}>
            <img src={flag} />
        </div>
        
        <div className={styles.cardContent}>
         <h2 className={!darkTheme? styles.countryName: styles.countryNameDark}>{name}</h2>
         <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Population:</strong> {population}</p>
         <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Region:</strong> {region}</p>
         <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Capital:</strong> {capital}</p>
        </div>
        

    </div>
  )
}
