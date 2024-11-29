import { useLoaderData } from 'react-router-dom';

import './App.css';
import PopularProducts from './components/PopularProducts';
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import UnderBanner from './components/UnderBanner';
import { Gallery } from './components/Gallery';
import ContactUs from './components/ContactUs';
import Header from './components/Header';

function App() {
 


  return (
  <div className=''>
    <Header></Header>
    <Banner/>
    <UnderBanner></UnderBanner>
     <PopularProducts />
     <Gallery></Gallery>
     <ContactUs></ContactUs>
  </div>
  );
}

export default App;
