import { IoChatboxEllipses } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const IconCard = () => {
  return (
    <div className=" text-white py-10">
      
      <div className="flex justify-center gap-10">
        {/* Card 1 */}
        <div className="text-center">
          <IoChatboxEllipses className="p-4 bg-yellow-400 text-6xl text-white rounded-full mx-auto" />
          <h3 className="mt-5 font-semibold text-lg">More Listings</h3>
          <p className="text-white font-bold mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate adipisci.
          </p>
        </div>
        {/* Card 2 */}
        <div className="text-center">
          <FaStar className="p-4 bg-yellow-400 text-6xl text-white rounded-full mx-auto" />
          <h3 className="mt-5 font-semibold text-lg">More Listings</h3>
          <p className="text-white font-bold  mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate adipisci.
          </p>
        </div>
        {/* Card 3 */}
        <div className="text-center">
          <FaBuilding className="p-4 bg-yellow-400 text-6xl text-white rounded-full mx-auto" />
          <h3 className="mt-5 font-semibold text-lg">More Listings</h3>
          <p className="text-white font-bold mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconCard;

