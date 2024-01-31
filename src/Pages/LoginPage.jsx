import { FaSyringe } from "react-icons/fa";
import { Link } from "react-router-dom";
import ParentRegistration from "./ParentRegistration";
const LoginPage = () => {
  return (
    <div className="flex-col">
      <div className="h-80 bg-orange-400 rounded-b-[50%] flex justify-center items-center">
        <h1 className="text-5xl text-white text-center">ስኳር</h1>
        <FaSyringe
          className="text-green-500 my-48 skew-icon ml-6 mb-4"
          size={50}
        />
      </div>
      <div className="flex-col flex-1 mt-11">
        <h1 className="text-gray-500 text-3xl mx-12">መረጃ መለያ</h1>
        <div className="py-9">
          <label htmlFor="childName" className="ml-14 text-lg text-green-600">
            ኢሜይል
          </label>
          <input
            type="email"
            id="childName"
            className="ml-5 h-10"
            name="childName"
          />
        </div>
        <div className="py-9">
          <label htmlFor="childName" className="ml-14 text-lg text-green-600">
            የይለፍ ቃል
          </label>
          <input
            type="password"
            id="childName"
            className="ml-5 h-10"
            name="childName"
          />
        </div>
      </div>
      <div className="flex  justify-center items-center mx-auto ">
        <div className="mt-7 ">
          <Link
            to="/Home"
            className="items-center bg-green-500 text-xl px-10 rounded-3xl text-white mx-[120px] "
          >
            ግባ
          </Link>
          <br />
          <div className="mt-6 flex justify-center items-center  ">
            <Link
              to="/signup"
              className="items-center  bg-green-500 text-xl px-10  rounded-3xl text-white "
            >
              መለያ ይጠይቁ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
