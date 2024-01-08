import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Features from './Features';

import CarouselDefault from './CarouselDefault';
import Footer from './Footer';
import CardsCenter from './medical';

function Landingpage(){
    return(
<div>
<Navbar></Navbar>
   <Home></Home>
    <Features></Features>
    <CarouselDefault></CarouselDefault>
    <CardsCenter></CardsCenter>
    <Footer></Footer>
    </div>
    )
};
export default Landingpage;

