import React, { useState, useEffect } from 'react';
import "./searchbar.css";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { projectsData } from '../work/Data';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Skeleton from 'react-loading-skeleton';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsToShow, setItemsToShow] = useState(3);
  const totalItems = projectsData.length;
  const [loading, setLoading] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [placeholder, setPlaceholder] = useState("Buscar tiendas");

  const handleClearSearch = () => {
    setSearchTerm("");
    setPlaceholder("Buscar tiendas");
  };

  useEffect(() => {
    let timeoutId;

    setLoading(true);
    timeoutId = setTimeout(() => {
      const filteredProjects = projectsData.filter((project) => {
        if (searchTerm === "") {
          return project;
        } else if (project.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return project;
        }
        return null;
      });

      setVisibleProjects(filteredProjects.slice(0, itemsToShow * 4));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, itemsToShow]);

  const mostrarMas = () => {
    setItemsToShow(prevItems => prevItems + 1);
  };

  return (
    <>
      <div className="input-wrapper">
        <CiSearch id="search-icon" />
        <input
          id="searchInput"
          type='text'
          placeholder={placeholder}
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <IoCloseOutline id="search-close" onClick={handleClearSearch} />
      </div>

      <div className="work_container container grid">
        {loading ? (
          Array.from({ length: itemsToShow * 4 }).map((_, index) => (
            <div className='work_card_skeleton' key={index}>
              <div className="card_filters_skeleton">
                <Skeleton />
              </div>
              <img src={<Skeleton />} alt='' className='work_img_skeleton' />
              <p className="hover_text_skeleton"><Skeleton /></p>
              <div className="card_description_skeleton">
                <h3 className="work_title_skeleton"><Skeleton /></h3>
                <p className="brand_description_skeleton"><Skeleton /></p>
                <a href="#" target='_blank' className="work_button_skeleton">
                  <Skeleton />
                </a>
              </div>
            </div>
          ))
        ) : (
          visibleProjects.map((project) => (
            <div className='work_card' key={project.id}>
              <div className="card_filters">
                {project.categories.map((category, index) => (
                  <a className="filter_item" key={index}>{category.trim()}</a>
                ))}
              </div>
              <img src={project.image} alt='' className='work_img' />
              <p className="hover_text">{project.hoverText}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui dicta ipsum laudantium molestias.
              </p>
              <div className="card_description">
                <h3 className="work_title">{project.title}</h3>
                <p className="brand_description">{project.description}</p>
                <a href={project.url} target='_blank' className="work_button">
                  Ver info <IoIosArrowForward className="work_button-icon" />
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {itemsToShow * 4 < totalItems && (
        <div className="ver_mas">
          <a className="ver_mas_buttom" onClick={mostrarMas}>
            {loading ? <Skeleton /> : "Ver más  "} <IoIosArrowDown />
          </a>
        </div>
      )}
    </>
  );
};

export default SearchBar;
