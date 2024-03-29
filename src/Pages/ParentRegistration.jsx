import { Link } from "react-router-dom";

const ParentRegistration = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 flex justify-center items-center mt-9 text-6xl text-green-500">
        እባክዎ ቅጹን ይሙሉ
      </div>
      <div className="flex-1 justify-center items-center mt-24 gap-4 ">
        <div className="py-9">
          <label htmlFor="childName" className="ml-14 text-lg text-green-600">
            የወላጅ ሙሉ ስም
          </label>
          <input
            type="text"
            id="childName"
            className="ml-5 h-10"
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
            className="ml-[116px] h-10 "
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
        <div className="py-9">
          <label htmlFor="childName" className="ml-14 text-lg text-green-600">
            ስልክ ቁጥር
          </label>
          <input
            type="text"
            id="childName"
            className="ml-5 h-10"
            name="childName"
          />
        </div>
        <div className="pት-9">
          <label htmlFor="childName" className="ml-14 text-lg text-green-600">
            ኢሜይል
          </label>
          <input
            type="text"
            id="childName"
            className="ml-5 h-10"
            name="childName"
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-12">
        <Link
          to="/childReg"
          className="text-5xl px-10 rounded-xxl text-white bg-orange-500 "
        >
          ይቀጥሉ
        </Link>
      </div>
    </div>
  );
};
export default ParentRegistration;
