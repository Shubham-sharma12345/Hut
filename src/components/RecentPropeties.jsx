import PropertyCard from "../components/PropertyCard"
const recentdata=[
  {
    id:1,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sunset Valley Villa",
    price: "	₹15000/mon",
    sqft: "1500 sq ft",
    bedrooms: "3 bedrooms",
    bathrooms: "2 bathrooms",
    desc: "A beautiful villa located in the serene Sunset Valley, perfect for those seeking peace and tranquility. Features spacious interiors and a lovely garden."
  },
  {
    id:2,
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mountain View Apartment",
    price: "	₹18000/mon",
    sqft: "1400 sq ft",
    bedrooms: "2 bedrooms",
    bathrooms: "2 bathrooms",
    desc: "Modern apartment with breathtaking mountain views. Conveniently located near major amenities and hiking trails."
  },
  {
    id:3,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lakeside Bungalow",
    price: "	₹42000/mon",
    sqft: "1700 sq ft",
    bedrooms: "4 bedrooms",
    bathrooms: "3 bathrooms",
    desc: "Nestled by the lake, this bungalow offers stunning waterfront views and a spacious layout, perfect for families."
  },
  {
    id:4,
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Cityscape Penthouse",
    price: "	₹55000/mon",
    sqft: "2000 sq ft",
    bedrooms: "3 bedrooms",
    bathrooms: "3 bathrooms",
    desc: "Luxury penthouse with a panoramic view of the city skyline. Includes modern amenities and high-end finishes."
  },
  {
    id:5,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Countryside Cottage",
    price: "	₹9000/mon",
    sqft: "1000 sq ft",
    bedrooms: "2 bedrooms",
    bathrooms: "1 bathroom",
    desc: "Charming cottage in the countryside, ideal for a peaceful getaway. Features a cozy interior and a large backyard."
  },
  {
    id:6,
    image: "https://images.pexels.com/photos/277763/pexels-photo-277763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Modern Studio",
    price: "₹11000/mon",
    sqft: "800 sq ft",
    bedrooms: "1 bedroom",
    bathrooms: "1 bathroom",
    desc: "Compact and stylish studio in a prime location. Perfect for singles or couples seeking convenience and affordability."
  }
  
]
const RecentPropeties = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className=" text-3xl sm:text-5xl fint-bold text-gray-600 " >Recent Properties</h1>
      <div className="grid sm:grid-cols-3 gap-6 my-4">

      {
        recentdata.map(({id,image,title,price,sqft,bedrooms,bathrooms,desc})=>(
          <PropertyCard
            key={id}
            image={image}
            title={title}
            price={price}
            sqft={sqft}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            desc={desc}
          />
        ))
      }
      
      
      
      </div>
      <button className="my-10 uppercase text-2xl bg-yellow-400 font-bold px-6 py-3 rounded-md">View All properties</button>
    </div>
  )
}

export default RecentPropeties
