import React, { useState } from 'react';
import Medial from "../images/medical-logo.jpeg"

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-between flex-wrap  lg:p-2 bg-[#fff] h-[8vh] w-[100%]">
    
    
    
     
     <div className="flex items-center flex-shrink-0 text-white mr-12 lg:mr-72">
     <img src={Medial}className="h-[7vh]"></img>
     
      <h4 className="font-sans text-2xl text-blue-500">Medial</h4>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-2 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-2 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-2 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-md lg:flex-grow bg-white font-serif ">
         <a href="#" className="block pt-1 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 p-2 hover:bg-[rgb(6,182,212)] rounded-xl px-2">
           Home
         </a>
         <a href="./women.js" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 p-2 hover:bg-[rgb(6,182,212)] rounded-xl px-2">
           Women
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 p-2 hover:bg-[rgb(6,182,212)] rounded-xl px-2">
           Doctors
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 p-2 hover:bg-[rgb(6,182,212)] rounded-xl px-2">
           others
         </a>
       </div>
       
     </div>
     <div className="font-semibold text-l pr-2 p-2 bg-[rgb(156,163,175)] shadow-3xl  hover:bg-[rgb(6,182,212)] px-1 mx-2 rounded-md ">
     <button>Log in</button>
            
       </div>
        <div className="font-semibold text-l pr-2 p-2 bg-[rgb(156,163,175)] shadow-3xl hover:bg-[rgb(6,182,212)] px-1 mx-4 rounded-md">

         <button>Sign Up</button>
            </div>

       

   </nav>
 );
}

export default Navbar;