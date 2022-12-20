import React from 'react'
import styles from "./CountryCard.module.css"


export default function CountryCard ({flag, name, population, region, capital}) {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
            <img src={flag} />
        </div>
        <div className={styles.cardContent}>
         <h2 className={styles.countryName}>{name}</h2>
         <p><strong>Population:</strong> {population}</p>
         <p><strong>Region:</strong> {region}</p>
         <p><strong>Capital:</strong> {capital}</p>
        </div>
        

    </div>
  )
}
