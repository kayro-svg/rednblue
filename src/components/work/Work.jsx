import React, {useState} from 'react'
import "./work.css"
import Works from './Works'
import { projectsData } from './Data';
import SearchBar from '../searchbar/SearchBar';

const Work = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="tiendas section" id="tiendas">

          <SearchBar/>

          

        </section>
    )
}
export default Work