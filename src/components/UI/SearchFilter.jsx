/* eslint-disable react/prop-types */

function SearchFilter({searchQuery, setSearchQuery, filterCountry, setFilterCountry}) {
  
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSelectChange = (event) => {
        setFilterCountry(event.target.value);
    }
  
  



  return (
    <section className="section-searchFilter container">
      <div>
        <input className="search-box"
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

      {/* <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div> */}

      {/* <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div> */}

      <div>
        <select
          className="select-section"
          value={filterCountry}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter