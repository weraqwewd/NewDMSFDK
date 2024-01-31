import { Link } from "react-router-dom";

const ChildRegistration = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 flex justify-center items-center mt-9 text-2xl text-green-500">
        እባክዎ ቅጹን ይሙሉ
      </div>
      <div className="flex-1 justify-center items-center mt-24 gap-4 ">
        <div className="py-9">
          <label htmlFor="childName" className="ml-14 text-lg text-green-600">
            የልጁ ሙሉ ስም
          </label>
          <input
            type="text"
            id="childName"
            className="ml-2 h-10"
            name="childName"
          />
        </div>
        <div className="py-10">
          <label htmlFor="childName" className="ml-14 text-lg  text-green-600 ">
            ዕድሜ
          </label>
          <input
            type="text"
            id="childName"
            className="ml-[90px] h-10 "
            name="childName"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-xl  text-green-600 ">ጾታ</h1>
          <div className="mt-7 flex gap-6">
            <input type="radio" name="gender" id="male" />
            <label for="male" className=" text-lg  text-green-600 ">
              ወንድ
            </label>
            <input type="radio" name="gender" id="female" />
            <label for="female" className=" text-lg  text-green-600 ">
              {" "}
              ሴት
            </label>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-28">
        <Link
          to="/log"
          className="text-5xl px-10 rounded-xl text-white bg-orange-500 "
        >
          ይመዝግቡ
        </Link>
      </div>
    </div>
  );
};
export default ChildRegistration;
