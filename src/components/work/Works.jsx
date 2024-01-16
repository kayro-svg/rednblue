import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import { IoIosArrowDown } from "react-icons/io";

const Works = () => {
  const [category, setCategory] = useState('General');
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (category === 'General') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.categories.includes(category);
      });
      setProjects(newProjects);
    }
  }, [category]);

  const handleClick = (category, index) => {
    setCategory(category);
    setActive(index);
  };

  const [itemsToShow, setItemsToShow] = useState(12);
  const totalItems = projectsData.length;

  const mostrarMas = () => {
    // Incrementar la cantidad de elementos a mostrar (puedes ajustar el valor según tus necesidades)
    setItemsToShow(prevItems => prevItems + 4);
  };

 

  return (

<>

    <div>
     

      <div className="work_container container grid">
      {projectsData.slice(0, itemsToShow).map((item) => (
        <WorkItems key={item.id} item={item} itemsToShow={itemsToShow} setItemsToShow={setItemsToShow} totalItems={totalItems} />
      ))}
      </div>
      <div className="ver_mas">
      {itemsToShow < totalItems && (
        
  <a className='ver_mas_buttom' onClick={mostrarMas}>Ver más <IoIosArrowDown /> </a>
        
      
      )}</div>
    </div>

    </>
  );
};

export default Works;
