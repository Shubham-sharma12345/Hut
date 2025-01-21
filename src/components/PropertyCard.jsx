

const PropertyCard = (
  {
    image="https://images.pexels.com/photos/15242036/pexels-photo-15242036/free-photo-of-home-office-interior-design-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title="Ava Hob Hill",
    price="$120/mon",
    sqft="1200 sq ft",
    bedrooms="4 bedrooms",
    bathrooms="2 bathrooms",
    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias inventore iusto aperiam nesciunt quaerat odio, similique obcaecati temporibus consequuntur fugit error quidem optio hic beatae possimus doloremque cumque architecto?"
    
  }
) => {
  return (
    <div className="py-5  w-[80vw] sm:w-[30rem]">
      <img  className=" w-[20rem] h-[30vh]" src={image}/>
      <h2 className="text-3xl font-bold text-yellow-400 mb-3 my-5">{title}</h2>
      <h3 className="text-2xl font-bold text-gray-500">{price}</h3>
     
          <ul className="flex gap-3 text-gray-300 my-2">
            <li>{sqft}</li>
            <li>{bedrooms}</li>
            <li>{bathrooms}</li>
          </ul>
      <p className="font-medium text-gray-400 text-md">{desc}</p>
    </div>
  )
}

export default PropertyCard
