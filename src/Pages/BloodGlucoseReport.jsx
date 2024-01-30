import { FaSyringe } from "react-icons/fa";
import { useState } from "react";
import ReportPopup from "./ReportPopup";
const BloodGlucoseReport = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="flex-col">
      <div className="h-96 bg-orange-400 rounded-b-[50%] flex justify-center items-center">
        <h1 className="text-5xl text-white text-center">
          የደም ውስጥ የግሉኮስ መጠን ሪፖርት
        </h1>
        <FaSyringe className="text-green-500 my-48 skew-icon " size={50} />
      </div>
      <div className="flex-1">
        <div className="py-9">
          <label htmlFor="childName" className="ml-36 text-3xl text-green-600">
            የጀመረበትን ቀን
          </label>
          <input
            type="date"
            id="childName"
            className="ml-5 h-10"
            name="childName"
          />
        </div>
        <div className="py-9">
          <label htmlFor="childName" className="ml-36 text-3xl text-green-600">
            የማጠናቀቂያ ቀን
          </label>
          <input
            type="date"
            id="childName"
            className="ml-5 h-10"
            name="childName"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex  justify-center items-center mx-auto ">
          <div className="mt-7 ">
            <button
              className="items-center bg-green-500 text-5xl px-10 rounded-3xl text-white mx-[120px]"
              onClick={togglePopup}
            >
              ሪፖርት ያግኙ
            </button>
          </div>
        </div>
      </div>
      <div>
        {showPopup && (
          <ReportPopup
            onClose={togglePopup}
            report={"የደም ውስጥ የግሉኮስ መጠን ሪፖርት"}
          />
        )}
      </div>
    </div>
  );
};
export default BloodGlucoseReport;
