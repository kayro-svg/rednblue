import React, { useState, useEffect } from 'react';
import "./searchbar.css";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { projectsData } from '../stores/Data';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Skeleton from 'react-loading-skeleton';

const SearchBar = () => {
  // Estado para gestionar el término de búsqueda o texto que se ingrese en el input
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para controlar la cantidad de elementos a mostrar
  const [itemsToShow, setItemsToShow] = useState(3);

  // Número total de elementos disponibles
  const totalItems = projectsData.length;

  // Estado para indicar si se está cargando información
  const [loading, setLoading] = useState(false);

  // Estado para almacenar los proyectos visibles
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Estado para gestionar el texto del marcador de posición en la barra de búsqueda
  const [placeholder, setPlaceholder] = useState("Buscar tiendas");

  // Función para limpiar la búsqueda y restablecer el marcador de posición a spaceholder
  const handleClearSearch = () => {
    setSearchTerm("");
    setPlaceholder("Buscar tiendas");
  };

  useEffect(() => {
    let timeoutId;

    // Activa el indicador de carga
    setLoading(true);

    // Establecer un temporizador para simular la búsqueda asíncrona
    timeoutId = setTimeout(() => {
      // Filtrar proyectos en base al término de búsqueda
      const filteredProjects = projectsData.filter((project) => {
        if (searchTerm === "") {
          return project;
        } else if (project.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return project;
        }
        return null;
      });

      // Establece las tiendas (stores) visibles y desactiva el indicador de carga
      setVisibleProjects(filteredProjects.slice(0, itemsToShow * 4));
      setLoading(false);
    }, 500);

    // Limpiar el temporizador en caso de que el componente se desmonte antes de que termine
    return () => clearTimeout(timeoutId);
  }, [searchTerm, itemsToShow]);

  // Función para cargar más elementos
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
          // Mostrar esqueletos mientras se carga la información
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
          // Mostrar las stores reales una vez cargado
          visibleProjects.map((project) => (
            <div className='store_card' key={project.id}>
              <div className="card_filters">
                {project.categories.map((category, index) => (
                  <a className="filter_item" key={index}>{category.trim()}</a>
                ))}
              </div>
              <img src={project.image} alt='' className='store_img' />
              <p className="hover_text">{project.hoverText}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui dicta ipsum laudantium molestias.
              </p>
              <div className="card_description">
                <h3 className="store_title">{project.title}</h3>
                <p className="brand_description">{project.description}</p>
                <a href={project.url} target='_blank' className="store_button">
                  Ver info <IoIosArrowForward className="store_button-icon" />
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Botón para cargar más proyectos */}
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
