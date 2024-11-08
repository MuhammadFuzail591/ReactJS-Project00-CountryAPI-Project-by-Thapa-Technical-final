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

  console.log(searchQuery, filterCountry)

  isPending && <Loader />
  
  return (
      <section className="country-section">
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}
        />
        
        <ul className="grid grid-four-cols">
          {countries.map((curCountry,index) => {
            return <CountryCard country={curCountry} key={index} />
          } )}
        </ul>

      </section>
    )
  }