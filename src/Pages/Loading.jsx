import { FaSyringe } from "react-icons/fa";
import { PiVirusBold } from "react-icons/pi";
const Loading = () => {
  return (
    <div className="h-[859px] flex-col bg-orange-400">
      <div className="flex justify-center ">
        <FaSyringe className="text-green-600 my-48 skew-icon" size={80} />
        <div className="relative"></div>
      </div>
      <div className="flex-1 justify-center flex items-center text-white text-8xl mx-auto">
        ስኳር
      </div>
      <div className="flex-1 items-center flex justify-center text-white text-5xl mt-[200px] ">
        እባክዎ ትንሽ ይጠብቁ!!
      </div>
    </div>
  );
};
export default Loading;
