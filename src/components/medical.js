import Dental from "../images/pexels-daniel-frank-305568.jpg";
import Body from "../images/pexels-rdne-stock-project-6129237.jpg";
import Child from "../images/pexels-anna-shvets-3845262.jpg";
import Eye from "../images/pexels-pavel-danilyuk-5996703.jpg";
import Rehabilation from "../images/pexels-kampus-production-6111616.jpg";
import Heart from "../images/tanya-pro-FqM8JnWuWms-unsplash.jpg";
function CardsCenter(){
    return (
<div className="m-8 ">
<h4 className="px-[550px] font-sans text-[24px] font-bold">Our Medical Services</h4>

      
        <div className="flex flex-wrap mx-4 p-4">

            {/* card-1 */}

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-transform transform-gpu hover:scale-110">
    <div className="bg-blue-300 p-6 rounded-lg shadow-md border-blue-500 hover:bg-[rgb(13,148,136)]">
      <img src={Dental} className="w-full "></img>
      <h2 className="text-xl font-bold mt-4 px-24">Dental Caring</h2>
      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
      <button className="font-serif text-white rounded-xl bg-gray-600 mx-24 mt-2 px-2">Get Details</button>
    </div>
  </div>


{/* card-2 */}

<div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-transform transform-gpu hover:scale-110">
    <div className="bg-blue-300 p-6 rounded-lg shadow-md border-blue-500 hover:bg-[rgb(13,148,136)]">
      <img src={Body} className="w-full"></img>
      <h2 className="text-xl font-bold mt-4 px-24">Body Surgery</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
      <button className="font-serif text-white rounded-xl bg-gray-600 mx-24 mt-2 px-2">Get Details</button>
    </div>
  </div>

  {/* card-3 */}
  <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-transform transform-gpu hover:scale-110">
    <div className="bg-blue-300 p-6 rounded-lg shadow-md border-blue-500 hover:bg-[rgb(13,148,136)]">
      <img src={Child} className="w-full h-[240px]"></img>
      <h2 className="text-xl font-bold mt-4 px-24">Child Emergency</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
      <button className="font-serif text-white rounded-xl bg-gray-600 mx-24 mt-2 px-2">Get Details</button>
    </div>
  </div>

 
{/* // cards section-2 */}
{/* <div classname="flex flex-wrap mx-4 p-4"> */}

{/* card-1 */}

<div className="w-full sm:w-1/2 md:w-1/3 px-4 transition-transform transform-gpu hover:scale-110">
  <div className="bg-blue-300 p-6 rounded-lg shadow-md border-blue-500 hover:bg-[rgb(13,148,136)]">
    <img src={Eye}></img>
    <h2 className="text-xl font-bold mt-4 px-24">Eye Testing</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
    <button className="font-serif text-white rounded-xl bg-gray-600 mx-24 mt-2 px-2">Get Details</button>
  </div>
</div>

{/* card-2 */}
<div className="w-full sm:w-1/2 md:w-1/3 px-4  transition-transform transform-gpu hover:scale-110">
    <div className="bg-blue-300 p-6 rounded-lg shadow-md border-blue-500 hover:bg-[rgb(13,148,136)]">
      <img src={Rehabilation}></img>
      <h2 className="text-xl font-bold mt-4 px-24">Rehabilation</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
      <button className="font-serif text-white rounded-xl bg-gray-600 mx-24 mt-2 px-2">Get Details</button>
    </div>
  </div>

{/* card-3 */}
<div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-transform transform-gpu hover:scale-110">
    <div className="bg-blue-300 p-6 rounded-lg shadow-md hover:bg-[rgb(13,148,136)]">
      <img src={Heart} className="w-full h-[240px]"></img>
      <h2 className="text-xl font-bold mt-4 px-24">Heart Caring</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
      <button className="font-serif text-white rounded-xl bg-gray-600 mx-24 mt-2 px-2">Get Details</button>
    </div>
  </div>

  </div>
</div>

// </div>
 

    )
};

export default CardsCenter;


