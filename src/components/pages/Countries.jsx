import { useState,useEffect, useMemo } from 'react'
import styles from "./Countries.module.css"
// import CountryCard from './components/country-card/CountryCard'
import MySelect from "../../components/UI/MySelect/MySelect"
import MyInput from "../../components/UI/MyInput/MyInput"
import Layout from '../../components/Layout/Layout'
import CardsList from '../../components/cardsList/CardsList'




import CountriesService from "../../API/CountriesService"
import Navbar from '../navbar/Navbar'
import Loader from '../UI/Loader/Loader'

function Countries() {

  const [countries, setCountries] = useState([])
    const [selectedRegion, setSelectedRegion] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    ///результат вычисления функции кэшируется
    const filteredByRegion = useMemo(()=>{
      console.log("OTRABOTALA FILTRACIA");
      if(selectedRegion){
        return countries.filter((country)=>selectedRegion===country.region)
      }
        return countries

    },[selectedRegion, countries])

    ///теперь попробуем выполнять поиск по уже отфильтрованному массиву(если он вообще отфильтрован)
    const filteredAndSearchCountries = useMemo(()=>{
      return filteredByRegion.filter((country)=>country.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, filteredByRegion])

    
    useEffect(()=>{
        
        fetchCountries()
    },[])

    async function fetchCountries(){
        setIsLoading(true)
        const countries = await CountriesService.getAll();
        setCountries(countries)
        setIsLoading(false)
        // console.log(countries[0].name);
    }


  const filterByRegion = (region)=>{
   setSelectedRegion(region)
  }

  return (
    
  <Layout>
  <Navbar/>

    {isLoading
    ? <Loader/>
    :  
    <>
    <div className={styles.wrapper}>
  <div className={styles.searchContainer}>

  <MyInput
      value = {searchQuery}
      onChange ={e => setSearchQuery(e.target.value)}
      placeholder =  "&#128269;     Search for a country..."
   />
    
    <MySelect
      value = {selectedRegion}
      onChange = {filterByRegion}
      defaultValue="Filter by region"
      options={[
        {value: "", name: "All"},
        {value: "Africa", name: "Africa"},
        {value: "Americas", name: "America"},
        {value: "Asia", name: "Asia"},
        {value: "Europe", name: "Europe"},
        {value: "Oceania", name: "Oceania"},
      ]}
    />
   </div>
</div>
  <CardsList countries={filteredAndSearchCountries}/>
  </>
    }
    
 
        
      
   </Layout>
  )
}

export default Countries