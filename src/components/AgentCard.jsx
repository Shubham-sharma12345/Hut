import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const AgentCard = ({
    image = "https://images.pexels.com/photos/7821936/pexels-photo-7821936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name = "Smaith jay",
    phone = "999999999",
    email = "test@test.gmail.com",
  }) => {
    return (
      <div className="w-[90vw] sm:w-[30rem] ">
        <img className="w-[20rem] h-[30vh] " src={image} alt={`${name}'s photo`} />
        <h2 className="text-3xl font-bold text-yellow-500 mb-3 my-5">{name}</h2>
        <h3 className=" flex text-2xl font-semibold text-gray-500 gap-1">  <FaPhone />+91 {phone}</h3>
        <h3 className=" flex text-2xl font-semibold text-gray-500 gap-1"><CiMail />{email}</h3>
      </div>
    );
  };
  
  export default AgentCard;
  
  