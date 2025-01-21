import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const Navbar = () => {
  return (
    <nav className="w-[80vw] mx-auto">
     <div className="flex  justify-between py-3 border-b-2 border-gray-600">
      <ul className="flex gap-3 font-medium text-gray-400">
        <li>Login</li>
        <li>Register</li>
        </ul>
        <ul className="flex gap-3 font-medium text-gray-400">
        <li className="flex justify-between gap-1"><CiMail />info@realstate.in</li>
        <li className="flex justify-between gap-1">
        <FaPhone />1800-2344-567</li>
      </ul>
     
     </div>
     <div className="flex justify-between gap-2.6">
      <span className="font-extrabold text-2xl">Intense <span className="text-sm text-yellow-500">realstate</span></span>
      <ul className="flex font-bold gap-6">
        <li className="cursor-pointer">Catlog</li>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Submit property</li>
        <li className="cursor-pointer">Service</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
     </div>
    </nav>
  )
}

export default Navbar
