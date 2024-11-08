import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postAPI";
import { Loader } from "../components/UI/Loader";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";


export default function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([])

  const [searchQuery, setSearchQuery] = useState("")
  const [filterCountry, setFilterCountry] = useState("all")


  useEffect(() => {
    startTransition(async() => {
      const res = await getCountryData()
      setCountries(res.data)
    })
  },[])


  const searchCountry = (country) => {
    if(searchQuery){
      return country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    }else{
      return country;
    }
    
  }
  const filterRegion = (country) => {
    if(filterCountry === "all"){
      return country;
    }
    else{
      return country.region.toLowerCase().includes(filterCountry.toLowerCase())
    }
  }

  //Logic of filtering countries
  const filteredCountries =   countries.filter((country) => searchCountry(country) && filterRegion(country))

  isPending && <Loader />
  
  return (
      <section className="country-section">
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}
          countries={countries}
          setCountries = {setCountries}
        />
        
        <ul className="grid grid-four-cols">
          {filteredCountries.map((curCountry,index) => {
            return <CountryCard country={curCountry} key={index} />
          } )}
        </ul>

      </section>
    )
  }