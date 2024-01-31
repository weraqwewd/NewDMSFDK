import { MdCancelPresentation } from "react-icons/md";
const ReportPopup = ({ onClose, report }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[200]">
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] bg-gray-900 flex items-start z-[201] rounded-3xl">
          <div className="bg-transparent relative">
            <h1 className="text-orange-500 md:text-3xl text-3xl font-bold my-4 mx-[89px]  ">
              ሪፖርት
            </h1>
            <h1 className="text-white md:text-xl text-xl my-2 mx-[89px]">
              {report}
            </h1>
            <MdCancelPresentation
              onClick={onClose}
              size={45}
              className="absolute top-0 right-[-30px] text-white hover:transform hover:translate-3/4 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportPopup;
