import { FaSyringe } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col">
      <div className="h-80 bg-orange-400 rounded-b-[65%] flex justify-center items-center">
        <h1 className="text-5xl text-white text-center">ስኳር</h1>
        <FaSyringe
          className="text-green-500 my-48 skew-icon ml-6 mb-4"
          size={50}
        />
      </div>
      <div className="flex-col flex justify-center items-center mt-10 gap-10">
        <Link
          to="/food"
          className="items-center text-center bg-blue-500 text-2xl px-10 rounded-3xl text-white mx-[120px] w-[500px]"
        >
          ምግብ መረጃ
        </Link>
        <Link
          to="/edu"
          className="items-center text-center bg-green-500 text-2xl px-10 rounded-3xl text-white w-[250px] "
        >
          ትምህርታዊ መረጃ
        </Link>
        <Link
          to="/info"
          className="items-center text-center bg-green-500 text-2xl px-10 rounded-3xl text-white w-[250px] "
        >
          መረጃ አስገባ
        </Link>
        <Link
          to="/insRep"
          className="items-center text-center bg-green-500 text-2xl px-10 rounded-3xl text-white w-[250px]"
        >
          የኢንሱሊን ሪፖርት ያግኙ
        </Link>
        <Link
          to="/gRep"
          className="items-center text-center bg-green-500 text-2xl px-10 rounded-3xl text-white w-[250px]"
        >
          የደም ግሉኮስ ሪፖርት ያግኙ
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
