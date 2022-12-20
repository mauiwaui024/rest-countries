import { useState,useEffect, useMemo } from 'react'
import './main.global.css'
import CountryCard from './components/country-card/CountryCard'
import MySelect from "./components/UI/MySelect/MySelect"
import MyInput from "./components/UI/MyInput/MyInput"
import Layout from './components/Layout/Layout'
import CardsList from './components/cardsList/CardsList'
import CountriesService from "./API/CountriesService"

function App() {

  const [countries, setCountries] = useState([])

    const [selectedRegion, setSelectedRegion] = useState("")

    const [searchQuery, setSearchQuery] = useState("")


    function getFilteredByRegion(){
      console.log("OTRABOTALA FILTRACIA");
        if(selectedRegion){
          return countries.filter((country)=>selectedRegion===country.region)
        }
        return countries
    }

    const filteredByRegion = getFilteredByRegion()

    useEffect(()=>{
        fetchCountries()
    },[])

    async function fetchCountries(){
        const countries = await CountriesService.getAll();
        setCountries(countries)
    }


  const filterByRegion = (region)=>{
   setSelectedRegion(region)
  }

  return (
    
  <Layout>
  <div>
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

   <MyInput
      value = {searchQuery}
      onChange ={e => setSearchQuery(e.target.value)}
      placeholder = "Search for a country"
   />
   </div>

      <CardsList countries={filteredByRegion}/>
   </Layout>
  )
}

export default App
