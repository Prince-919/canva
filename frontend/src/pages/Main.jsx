import Header from "../components/Header";
import { BsGrid1X2, BsFolder, BsFillImageFill } from "react-icons/bs";
import { FaShapes, FaCloudUploadAlt } from "react-icons/fa";
import { TfiText } from "react-icons/tfi";
import { RxTransparencyGrid } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import TemplateDesign from "../components/main/TemplateDesign";
import Shapes from "../components/main/Shapes";
import UploadImage from "../components/main/UploadImage";
import Text from "../components/main/Text";
import Projects from "../components/main/Projects";
import Image from "../components/main/Image";
import Background from "../components/main/Background";

const Main = () => {
  const [state, setState] = useState("");
  const [show, setShow] = useState({
    status: true,
    name: "",
  });

  const setElements = (type, name) => {
    setState(type);
    setShow({ status: false, name });
  };
  return (
    <div className="min-w-screen h-screen bg-black">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen">
        <div className="bg-[#18191b] w-[80px] z-50 h-full text-gray-400 overflow-y-auto">
          <div
            onClick={() => setElements("design", "design")}
            className={`${
              show.name === "design" ? "bg-[#252627]" : ""
            } w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer`}
          >
            <span className="text-2xl">
              <BsGrid1X2 />
            </span>
            <span className="text-xs font-semibold">Design</span>
          </div>
          <div
            onClick={() => setElements("shape", "shape")}
            className={`${
              show.name === "shape" ? "bg-[#252627]" : ""
            } w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer`}
          >
            <span className="text-2xl">
              <FaShapes />
            </span>
            <span className="text-xs font-semibold">Shapes</span>
          </div>
          <div
            onClick={() => setElements("image", "uploadImage")}
            className={`${
              show.name === "uploadImage" ? "bg-[#252627]" : ""
            } w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer`}
          >
            <span className="text-2xl">
              <FaCloudUploadAlt />
            </span>
            <span className="text-xs font-semibold">Upload</span>
          </div>
          <div
            onClick={() => setElements("text", "text")}
            className={`${
              show.name === "text" ? "bg-[#252627]" : ""
            } w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer`}
          >
            <span className="text-2xl">
              <TfiText />
            </span>
            <span className="text-xs font-semibold">Text</span>
          </div>
          <div
            onClick={() => setElements("project", "projects")}
            className={`${
              show.name === "projects" ? "bg-[#252627]" : ""
            } w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer`}
          >
            <span className="text-2xl">
              <BsFolder />
            </span>
            <span className="text-xs font-semibold">Project</span>
          </div>
          <div
            onClick={() => setElements("initImage", "images")}
            className={`${
              show.name === "images" ? "bg-[#252627]" : ""
            } w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer`}
          >
            <span className="text-2xl">
              <BsFillImageFill />
            </span>
            <span className="text-xs font-semibold">Images</span>
          </div>
          <div
            onClick={() => setElements("background", "background")}
            className={`${
              show.name === "background" ? "bg-[#252627]" : ""
            } w-full h-[80px] flex justify-center items-center flex-col gap-1 hover:text-gray-100 cursor-pointer`}
          >
            <span className="text-2xl">
              <RxTransparencyGrid />
            </span>
            <span className="text-xs font-semibold">Background</span>
          </div>
        </div>
        <div className="h-full w-[calc(100%-75px)]">
          <div
            className={`${
              show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"
            } bg-[#252627] h-full fixed transition-all duration-700 w-[350px] z-30`}
          >
            <div
              onClick={() => setShow({ status: true, name: "" })}
              className="flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full"
            >
              <MdKeyboardArrowLeft />
            </div>
            {state === "design" && (
              <div className="grid grid-cols-2 gap-2">
                <TemplateDesign />
              </div>
            )}
            {state === "shape" && (
              <div className="grid grid-cols-3 gap-2">
                <Shapes />
              </div>
            )}
            {state === "image" && (
              <div>
                <UploadImage />
              </div>
            )}
            {state === "text" && (
              <div className="grid grid-cols-1 gap-2">
                <Text />
              </div>
            )}
            {state === "project" && (
              <div>
                <Projects />
              </div>
            )}
            {state === "initImage" && (
              <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
                <Image />
              </div>
            )}
            {state === "background" && (
              <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
                <Background />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
