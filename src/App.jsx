import React from 'react'
import { Navigateboat } from './boat/navnavigate';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


 

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
      <Navigateboat/>
    </div>
  )
}
