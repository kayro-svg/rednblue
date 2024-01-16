import React, { useState } from 'react';
import { projectsData } from './Data';
import { IoIosArrowForward } from "react-icons/io";
import "./work.css";
import SearchBar from '../searchbar/SearchBar';


const WorkItems = ({ item, itemsToShow, setItemsToShow, totalItems }) => {
  const currentProject = projectsData.find(project => project.id === item.id);

  return (
    <div className='work_card' key={item.id}>
      <div className="card_filters">
        {currentProject.categories.map((category, index) => (
          <a className="filter_item" key={index}>{category.trim()}</a>
        ))}
      </div>
      <img src={item.image} alt='' className='work_img' />
      <p className="hover_text">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sollicitudin consectetur pellentesque risus tellus aliquet. </p>
      <div className="card_description">
        <h3 className="work_title">{item.title}</h3>
        <p className="brand_description">{item.description}</p>
        <a href={item.url} target='_blank' className="work_button">
          Ver info <IoIosArrowForward className="work_button-icon" />
        </a>
      </div>
    </div>
  );
}

export default WorkItems;
