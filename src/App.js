import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import { router } from './Routers/Router/Router';

function App () {
 useEffect(()=>{
    AOS.init();
    AOS.refresh();
  })

  return (<div>
    <RouterProvider router={router}></RouterProvider>
  </div>)
};
 


export default App;
