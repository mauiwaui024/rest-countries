import React  from 'react'
import CountryCard from '../country-card/CountryCard'
import styles from "./CardsList.module.css"


function CardsList({countries}) {

  return (
    <div>
    <ul>
        {countries.map((country)=>
           <CountryCard 
           key={country.name}
           flag = {country.flag}
           name = {country.name} 
           population = {country.population} 
           region = {country.region}
           capital = {country.capital}
             />
        )}
    </ul>
    </div>
  )
}

export default CardsList