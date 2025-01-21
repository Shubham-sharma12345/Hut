import Categoryitem from "./Categoryitem"


const categoryArr=[
  {
    id:1,
    title:"CrazyHouses",
    image:"https://images.pexels.com/photos/15242036/pexels-photo-15242036/free-photo-of-home-office-interior-design-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:2,
    title:"With Swimming Poll",
    image:"https://images.pexels.com/photos/15242036/pexels-photo-15242036/free-photo-of-home-office-interior-design-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:3,
    title:"Studio Apartment",
    image:"https://images.pexels.com/photos/15242036/pexels-photo-15242036/free-photo-of-home-office-interior-design-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:4,
    title:"Luxury Houses",
    image:"https://images.pexels.com/photos/15242036/pexels-photo-15242036/free-photo-of-home-office-interior-design-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
]


const Category = () => {
  return (
    <div className="my-14 mx-auto flex gap-10 w-[90vw] overflow-x-scroll sm:overflow-hidden  ">
    {
      categoryArr.map(({id,title,image})=>(
        <Categoryitem 
        key={id}
        title={title}
        image={image}

        />
      ))
    }
     <Categoryitem/>
     


    </div>
  )
}

export default Category
