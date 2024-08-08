import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderBoat } from './navbar';
import Payment from './payment';
import Classicmain from './classicmain';
import Contact from './contact';
import Hoodie from './hoodie';
import Tshirt from './tshirt'
import Track from './track'
import Shoes from './shoes'
import Items from './items';

export function Navigateboat() {
  return (
    <>  
      <Router>
        <HeaderBoat />
        <Routes>
          <Route path="/"   element={<Classicmain/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/hoodie" element={<Hoodie/>}/>
          <Route path="/tshirt" element={<Tshirt/>}/>
          <Route path="/track" element={<Track/>}/>
          <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/items/:id" element={<Items/>} />  
        </Routes>
      </Router>
    </>
  );
}