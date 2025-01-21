
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
const imgearray=[
    {id:1,
    image:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:2,
        image:"https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:3,
            image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    

]

const HeroSection = () => {


  return (
    <div>

  
      <Swiper className="w-full h-[80vh] relative">

     <div className="  w-[50vw] mx-auto top-50 bottom-50 right-50   z-10 left-50 absolute">
     <h2 className=" text-6xl text-center  font-bold">Find Your Dream Home</h2>
     <div className="border w-[70%] flex  mx-auto justify-between ">
        <input type="search" className="py-3  px-8 border-2  text-black bg-white rounded-md outline-none w-[70%]" placeholder="Search Your City!!!"></input>
        <button className="py-3 px-8 bg-amber-300 w-[20%] font-bold">Search</button>
     </div>
     </div>
      {
        imgearray.map(({id,image})=>(
            <SwiperSlide className="text-center text-[10px] flex justify-center items-center" 
            key={id}><img className="block w-full  opacity-60 h-full object-cover py-4" src={image}/></SwiperSlide>
        ))
    }
        
        
      </Swiper>
    </div>
  )
}

export default HeroSection
