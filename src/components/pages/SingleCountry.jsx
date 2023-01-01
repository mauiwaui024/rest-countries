import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate, useLocation, redirect } from 'react-router-dom'
import CountriesService from '../../API/CountriesService';
import Navbar from '../navbar/Navbar';
import styles from "./SingleCountry.module.css"
import  * as mdIcons from "react-icons/md"
import { useTheme } from '../../hooks/ThemeContext';
import Layout from '../Layout/Layout';

function SingleCountry() {
  const [country, setCountry] = useState({})
  const [prevUrls, setPrevUrls] = useState([])
    const params = useParams()

    let navigate = useNavigate();
    let location = useLocation()

    async function fetchByCode(){
      const countryByCode = await CountriesService.getByCode(params.code);
      setCountry(countryByCode)
      // console.log(countryByCode);
      
  }
   

    async function fetchBorderCountry (event, index) {
    
      const newCode = country.borders[index]
     
      const countryByCode = await CountriesService.getByCode(newCode);
      setCountry(countryByCode)
      const newPath = location.pathname.slice(4) + "/" + newCode
      // console.log(newPath);
      navigate(newPath)
      prevUrls.push(location.pathname.slice(1))
      console.log(prevUrls);
      //здесь ставим предыдущий урл при клике на код бордерных стран
    };

    async function goBackByCode(url){
      
      // console.log(prevUrl.slice(1))
      //а здесь мы этот код используем
      const prevCode = url
      console.log(url);
      // setPrevUrl(location.pathname)
      console.log(prevCode);
        const countryByCode = await CountriesService.getByCode(prevCode);
        setCountry(countryByCode)
        // setPrevUrl(params.code)
      
        navigate(-1)
        prevUrls.pop()
      console.log(prevUrls);
  }

    
    
    

    useEffect(()=>{
      fetchByCode()
      console.log(prevUrls.length);
    },[])


    const darkTheme = useTheme()

  return (
    <Layout>
    <Navbar/>
    {/* <div className={!darkTheme?styles.wrapper: styles.wrapperDark}> */}
    <div className={styles.wrapper}>
    {prevUrls.length != 0
       ? prevUrls.slice(-1).map(url => <button className={darkTheme? styles.btnDark: styles.btn} onClick={()=>goBackByCode(url)}> <mdIcons.MdOutlineKeyboardBackspace/>   Back</button>)
       : <button className={darkTheme? styles.btnDark: styles.btn} 
       onClick={()=>navigate(-1)}><mdIcons.MdOutlineKeyboardBackspace/>   Back</button>
        }


    <div className={darkTheme? styles.containerCDark: styles.containerC}>
       
        <div className={styles.countryFlag}>
            <img src = {country.flag}/>
        </div>

        <div className={styles.content}>

           

          <div className={styles.description}>
          <div className={styles.title}>
              <h2 className={darkTheme? styles.dark: ""}>{country.name} </h2>
           </div> 

           <div className={styles.descContainer}>
           <div className={styles.desc1}>
            
        
            <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Native Name:</strong> {country.nativeName}</p>
            <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Population:</strong> {country.population}</p>
            <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Region:</strong> {country.region}</p>
            <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Sub-region:</strong> {country.subregion}</p>
            <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Capital:</strong> {country.capital}</p>
          </div>

          <div className={styles.desc2}>
          <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Top Level Domain:</strong> {country.topLevelDomain}</p>

          {country.currencies
          ? <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Currencies: </strong> {country.currencies.map((curr, index) => (index? ", " : "") + curr.name)}</p>
          : ""}

          {country.languages
          ? <p className={darkTheme? styles.dark: ""}><strong className={darkTheme? styles.dark: ""}>Languages:</strong> {country.languages.map((lang, index) => (index ? ", " : "") + lang.name )}</p>
          : ""}
          
          </div>
           </div>

            <div  className={styles.borderInfo}>
          {country.borders
            ? <p className={darkTheme? styles.dark: ""}>Border Countries: {country.borders.map((bord, index) => <Link className={darkTheme? styles.linkDark: ""} onClick={event => fetchBorderCountry(event, index)}> {bord} </Link>  )}</p>
            : ""}
          </div>

          </div>

          


        </div>

    </div>
    </div>
    </Layout>
  )
}

export default SingleCountry


//1.добавить в компонент country-card кнопку для перехода на страницу Single country

//2.Также туда же добавить hook useHistory, надо чекнуть че он ваще значит
//инициализировать useHistory - заменен на useNavigate
//3. На кнопку повесить ОнКлик и с помощью функции router.push запушить название страны в юрл
//4. Создать route который будет отрисовывать компонент синглКаунтри localhost/:name
//5.теперь надо name вытащить из юрл и отправить запрос на сервер на получение одной страны
//делается это все с useParams