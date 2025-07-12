import Header from "../components/Header";
import { HiOutlineTemplate, HiTemplate } from "react-icons/hi";
import { BsFolder, BsFillFolderFill } from "react-icons/bs";
import { RiShapesFill, RiShapesLine } from "react-icons/ri";
import { BsCloudUpload, BsCloudUploadFill } from "react-icons/bs";
import { RxText } from "react-icons/rx";
import { CiText } from "react-icons/ci";
import { IoImage, IoImageOutline } from "react-icons/io5";
import { RxTransparencyGrid } from "react-icons/rx";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbBackground } from "react-icons/tb";
import ToolButton from "../components/ToolButton";
import TemplateDesign from "../components/main/TemplateDesign";

const Main = () => {
  const [state, setState] = useState("");
  const [show, setShow] = useState({
    status: true,
    name: "",
  });

  const setElements = (type, name) => {
    setState(type);
    setShow({
      status: false,
      name,
    });
  };
  return (
    <div className="min-w-screen h-screen bg-black">
      <Header />
      <div className="flex h-[calc(100vh-60px)] w-screen">
        <div className="bg-[#18191b] w-[80px] h-full z-50 overflow-y-auto text-gray-400">
          <ToolButton
            label="Design"
            icon={show.name === "design" ? HiTemplate : HiOutlineTemplate}
            onClick={() => setElements("design", "design")}
            isActive={show.name === "design"}
          />
          <ToolButton
            label="Shapes"
            icon={show.name === "shape" ? RiShapesFill : RiShapesLine}
            onClick={() => setElements("shape", "shape")}
            isActive={show.name === "shape"}
          />
          <ToolButton
            label="Upload"
            icon={
              show.name === "uploadImage" ? BsCloudUploadFill : BsCloudUpload
            }
            onClick={() => setElements("image", "uploadImage")}
            isActive={show.name === "uploadImage"}
          />
          <ToolButton
            label="Text"
            icon={show.name === "text" ? RxText : CiText}
            onClick={() => setElements("text", "text")}
            isActive={show.name === "text"}
          />
          <ToolButton
            label="Project"
            icon={show.name === "projects" ? BsFillFolderFill : BsFolder}
            onClick={() => setElements("project", "projects")}
            isActive={show.name === "projects"}
          />
          <ToolButton
            label="Images"
            icon={show.name === "images" ? IoImage : IoImageOutline}
            onClick={() => setElements("initImage", "images")}
            isActive={show.name === "images"}
          />
          <ToolButton
            label="Background"
            icon={
              show.name === "background" ? TbBackground : RxTransparencyGrid
            }
            onClick={() => setElements("background", "background")}
            isActive={show.name === "background"}
          />
        </div>
        <div className="h-full w-[calc(100%-75px)]">
          <div
            className={`${
              show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"
            } bg-[#252627] w-[350px] h-full fixed transition-all duration-700 z-30`}
          >
            <div
              onClick={() => setShow({ status: true, name: "" })}
              className="flex justify-center items-center absolute w-[20px] top-[40%] bg-[#252627] -right-2 text-slate-300 cursor-pointer h-[100px] rounded-full"
            >
              <MdKeyboardArrowLeft />
            </div>
            {state === "design" && (
              <div className="grid grid-cols-2 gap-2">
                <TemplateDesign type="main" />
              </div>
            )}
            {state === "shape" && <div>shape</div>}
            {state === "image" && <div>image</div>}
            {state === "text" && <div>text</div>}
            {state === "project" && <div>project</div>}
            {state === "initImage" && <div>initImage</div>}
            {state === "background" && <div>background</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
