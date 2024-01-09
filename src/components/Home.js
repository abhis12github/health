import React from "react";
import Medical from "../images/medical-doctor.avif"
function Home(){
    return (


//old code 

    // <div className="h-[90vh] w-[100%] bg-[#9DD8F8] flex">
    // <div className="flex flex-col w-[35%] justify-center p-6">   
        
    //     <h1 className="text-2xl font-semibold ml-4 text-black font-"> Health is a priceless wealth<br></br> Invest while you can.</h1>
    //     <div className="ml-4 mt-">
    //         <button className="bg-[#2aacb0] p-3 rounded-md hover:bg-[#3fd1d6] mr-3" >Log in</button>
    //         <button className="p-3 rounded-md  outline-[#229CA1] outline-1 hover:bg-[#4ddfe4] outline">Sign Up</button>
            
    //     </div>
    // </div>
    // <div className="flex items-center justify-center ">
       
    //     <img src={doctor} className=" h-[100%]"></img>

    // </div>
    // </div>
    //]

//new code 

<div>

    <img src={Medical} className="w-[100%] h-[550px]"></img>
    <div className="absolute top-28 left-20 right-20 flex ">
        <h4 className="text-white text-3xl font-serif font-bold">Make Your <span class="text-[rgb(7,89,133)]">Happiness</span> </h4>
        </div>
        <div className="absolute top-20 left-20 right-25 flex ">
            <h4 className="text-white text-3xl font-serif font-bold">Your Good Health</h4> 
            </div>

</div>

    );
}

export default Home;