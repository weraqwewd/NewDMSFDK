import headerpic from "../assets/headerpic.jpg";
import { FaSyringe } from "react-icons/fa";
const WelcomePage = () => {
  return (
    <div className="flex-col">
      <div className="flex flex-1 mt-0">
        <img
          src={headerpic}
          className="img mt-0 pt-0 mb-4 max-w-[500px] mx-auto "
          alt=""
          srcset=""
        />
      </div>
      <div className="flex flex-1">
        <div className="justify-center flex items-center text-green-500 text-6xl mx-auto ">
          ስኳር
        </div>
        <FaSyringe
          className="text-orange-500 my-48 skew-icon absolute mx-[300px]"
          size={50}
        />
      </div>
      <div className="flex  justify-center items-center mx-auto ">
        <div className="mt-[300px] ">
          <button className="items-center bg-blue-500 text-5xl px-10 rounded-3xl text-white mx-[120px]">
            ግባ
          </button>
          <br />
          <button className="items-center bg-blue-500 text-5xl px-10 rounded-3xl text-white mt-4">
            ይመዝገቡ
          </button>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
