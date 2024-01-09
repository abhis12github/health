import Women from "../images/pexels-mart-production-7088841.jpg"
function CarouselDefault() {
  return (

    //old code 

    // <div className="h-[100vh] w-[100%] flex justify-center items-center bg-[#9DD8F8]">
    //   <Carousel className="rounded-xl h-[80%] w-[80%]">
    //   <img
    //     src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    //     alt="image 1"
    //     className="h-[100%] w-[100%] object-cover"
    //   />
    //   <img
    //     src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    //     alt="image 2"
    //     className="h-[100%] w-[100%] object-cover"
    //   />
    //   <img
    //     src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    //     alt="image 3"
    //     className="h-[100%] w-[100%] object-cover"
    //   />
    // </Carousel>

    // </div>
  

    //new code 
    <div class="flex flex-row ">

    <img src={Women}alt="#" class="h-[450px] w-[650px] px-8"></img>
    <div>
      <h4 className="px-64  font-serif text-2xl text-[rgb(20,184,166)] h-11 p-4">We Care Your Pregnancy</h4>

      <div className="p-8">
      <p className="px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ullam sint pariatur quidem sunt, dolor accusantium molestias recusandae iste possimus?]</p>
      <p className="px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur distinctio rem earum! Fugiat repudiandae rem quasi, placeat nulla fugit reiciendis!</p>
      <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad rem minima praesentium, itaque nulla quaerat iure recusandae ipsam saepe.</p>
      <button className="mt-14 mx-80 px-4 rounded-lg bg-[rgb(236,72,128)] p-2 hover:bg-[rgb(45,212,191)]">Book Appointment</button>
      </div>
    </div>
    </div>
  )
};

export default CarouselDefault;