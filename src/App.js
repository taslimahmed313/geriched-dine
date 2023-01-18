import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import { router } from './Routers/Router/Router';

const App = () => (
  <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
);

export default App;
