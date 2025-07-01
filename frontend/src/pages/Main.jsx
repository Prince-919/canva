import Header from "../components/Header";
import { BsGrid1X2, BsFolder, BsFillImageFill } from "react-icons/bs";
import { FaShapes, FaCloudUploadAlt } from "react-icons/fa";
import { TfiText } from "react-icons/tfi";
import { RxTransparencyGrid } from "react-icons/rx";

const Main = () => {
  return (
    <div className="min-w-screen h-screen bg-black">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen">
        <div className="bg-[#18191b] w-[80px] z-50 h-full text-gray-400 overflow-y-auto">
          <div className="w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer">
            <span className="text-2xl">
              <BsGrid1X2 />
            </span>
            <span className="text-xs font-semibold">Design</span>
          </div>
          <div className="w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer">
            <span className="text-2xl">
              <FaShapes />
            </span>
            <span className="text-xs font-semibold">Shapes</span>
          </div>
          <div className="w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer">
            <span className="text-2xl">
              <FaCloudUploadAlt />
            </span>
            <span className="text-xs font-semibold">Upload</span>
          </div>
          <div className="w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer">
            <span className="text-2xl">
              <TfiText />
            </span>
            <span className="text-xs font-semibold">Text</span>
          </div>
          <div className="w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer">
            <span className="text-2xl">
              <BsFolder />
            </span>
            <span className="text-xs font-semibold">Project</span>
          </div>
          <div className="w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer">
            <span className="text-2xl">
              <BsFillImageFill />
            </span>
            <span className="text-xs font-semibold">Images</span>
          </div>
          <div className="w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer">
            <span className="text-2xl">
              <RxTransparencyGrid />
            </span>
            <span className="text-xs font-semibold">Background</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
