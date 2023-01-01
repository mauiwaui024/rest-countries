import React  from 'react'
import CountryCard from '../country-card/CountryCard'
import styles from "./CardsList.module.css"
import { useTheme } from '../../hooks/ThemeContext'

function CardsList({countries}) {
  const darkTheme = useTheme()
  return (
    <div className={darkTheme? styles.wrapper1Dark: styles.wrapper1}>
      <div className={darkTheme?styles.containerCardsDark: styles.containerCards}>
      {countries.map((country)=>
           <CountryCard 
           key={country.name}
           flag = {country.flag}
           name = {country.name} 
           population = {country.population} 
           region = {country.region}
           capital = {country.capital}
           code = {country.alpha3Code}
             />
        )}
      </div>
    </div>
  )
}

export default CardsList