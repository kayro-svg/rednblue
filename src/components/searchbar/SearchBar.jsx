import React, {useState} from 'react';
import "./searchbar.css";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export const SearchBar = () => {
  return (
    <div className="input-wrapper">
      <CiSearch id="search-icon"/>
    <input placeholder="Buscar..."/>
    <IoCloseOutline id="search-close" />

    </div>
  )
}
