import React, { useEffect, useState } from 'react';
import "./App.css";
import Footer from './components/footer/Footer';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import StoresContent from './components/stores/StoresContent';


function App() {
  return (
    <>
    <Navbar/>
    <Cover/>
    <StoresContent/>
    <Footer/>
    </>
  );
}


export default App;
