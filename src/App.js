import React, { useEffect, useState } from 'react';
import "./App.css";

import Footer from './components/footer/Footer';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import Work from './components/work/Work';
import SearchBar from './components/searchbar/SearchBar';
import Skeleton from "react-loading-skeleton";

function App() {
  return (
    <>

    <Navbar/>
    <Cover/>
    <Work/>
    <Footer/>
    </>
  );
}


export default App;
