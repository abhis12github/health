import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Women from './components/Women.js';
import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Features from './components/Features';
// import Test from './components/Tets';
// import CarouselDefault from './components/CarouselDefault';
// import Footer from './components/Footer';
// import CardsCenter from './components/medical';




const router=createBrowserRouter([
  {
    path:"/",
    element:<Landingpage></Landingpage>
  },
  {
    path:"/Women",
    element:<Women></Women>
  }
]);


function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;


