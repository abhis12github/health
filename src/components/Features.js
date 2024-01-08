import React from "react";
import doctor from "../images/vecteezy_afro-female-professional-doctor_14175079-removebg.png";
// import styles from "../styles/Features.module.css";
import Card from "./Card";

function Features(){

    function handleClick(){
        console.log("clicked");
    }
    return (
    <div className="w-[100%]">
    {/* <div className={styles.feature}> */}
    {/* <h2 className="text-center font-medium text-xl p-4 text-[#2aacb0]">Our Services</h2> */}
        <div className="flex h-[50vh] justify-between">
            <div className="h-[100%] w-[35%] flex justify-center pr-2">
                <img src={doctor} className="w-[80%]"></img>
            </div>
            <div className="w-[65%] flex justify-evenly my-auto">
                <Card source="fa-solid fa-video fa-lg" title="1-1 Video Facility" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."></Card>
                <Card source="fa-solid fa-location-dot fa-xl" title="Find Hospital" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."></Card>
                <Card source="fa-solid fa-user-doctor fa-xl" title="Find Doctors" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."></Card>
                <Card source="fa-solid fa-headset fa-xl" title="Health Tips" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."></Card>
            </div>
        </div>

    {/* </div> */}
        

    </div>
    );
    
}

export default Features;