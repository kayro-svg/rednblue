import React, {useState} from 'react'
import SearchBar from '../searchbar/SearchBar';
import "./stores.css"

const Work = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="tiendas section" id="tiendas">
          <SearchBar/>
        </section>
    )
}
export default Work