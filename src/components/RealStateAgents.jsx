import AgentCard from "./AgentCard"


const agentCard=[
  {
    id:1,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "John Doe",
      phone: "9876543210",
      email: "johndoe@example.com",
    },
    {
      id:2,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Emily Carter",
      phone: "8765432109",
      email: "emily.carter@example.com",
    },
    {
      id:3,
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Michael Brown",
      phone: "7654321098",
      email: "michael.brown@example.com",
    },
    {
      id:4,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sophia Johnson",
      phone: "6543210987",
      email: "sophia.johnson@example.com",
    }
    
    
    
]

const RealStateAgents = () => {
  return (
    
    <div className="flex flex-col justify-center items-center  text-bold my-20 bg-gray-300">
      <h1 className=" text-3xl sm:text-5xl fint-bold text-gray-600 " >Real State Agents</h1>
      <div className="grid grid-cols-4 my-5 ">

      {
        agentCard.map(({id,image,name,phone,email})=>(
          <AgentCard
            key={id}
            name={name}
            image={image}
            phone={phone}
            email={email}
          />
        ))
      }
     
     
      </div>
     <button className="my-10 font-semibold text-lg text-white sm:text-xl bg-yellow-400 py-3 px-3 rounded-md">View All Agents</button>
    </div>
  )
}

export default RealStateAgents
