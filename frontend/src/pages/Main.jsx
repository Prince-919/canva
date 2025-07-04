import Header from "../components/Header";
import { BsGrid1X2, BsFolder, BsFillImageFill } from "react-icons/bs";
import { FaShapes, FaCloudUploadAlt } from "react-icons/fa";
import { TfiText } from "react-icons/tfi";
import { RxTransparencyGrid } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import TemplateDesign from "../components/main/TemplateDesign";
import Shapes from "../components/main/Shapes";
import UploadImage from "../components/main/UploadImage";
import Text from "../components/main/Text";
import Projects from "../components/main/Projects";
import Image from "../components/main/Image";
import Background from "../components/main/Background";
import CreateComponent from "../components/CreateComponent";

const Main = () => {
  const [state, setState] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [rotate, setRotate] = useState(0);
  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [currentComponent, setCurrentComponent] = useState("");
  const [show, setShow] = useState({
    status: true,
    name: "",
  });

  const setElements = (type, name) => {
    setState(type);
    setShow({ status: false, name });
  };

  const moveElement = (id, currentInfo) => {
    setCurrentComponent(currentInfo);
    let isMoving = true;
    const currentDiv = document.getElementById(id);
    const mouseMove = ({ movementX, movementY }) => {
      const getStyle = window.getComputedStyle(currentDiv);
      const left = parseInt(getStyle.left);
      const top = parseInt(getStyle.top);
      if (isMoving) {
        currentDiv.style.left = `${left + movementX}px`;
        currentDiv.style.top = `${top + movementY}px`;
      }
    };
    const mouseUp = () => {
      isMoving = false;
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      setLeft(parseInt(currentDiv.style.left));
      setTop(parseInt(currentDiv.style.top));
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  const resizeElement = (id, currentInfo) => {
    setCurrentComponent(currentInfo);
    let isMoving = true;
    const currentDiv = document.getElementById(id);
    const mouseMove = ({ movementX, movementY }) => {
      const getStyle = window.getComputedStyle(currentDiv);
      const width = parseInt(getStyle.width);
      const height = parseInt(getStyle.height);
      if (isMoving) {
        currentDiv.style.width = `${width + movementX}px`;
        currentDiv.style.height = `${height + movementY}px`;
      }
    };
    const mouseUp = () => {
      isMoving = false;
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      setWidth(parseInt(currentDiv.style.width));
      setHeight(parseInt(currentDiv.style.height));
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  const rotateElement = (id, currentInfo) => {
    setCurrentComponent("");
    setCurrentComponent(currentInfo);
    const target = document.getElementById(id);
    const mouseMove = ({ movementX, movementY }) => {
      const getStyle = window.getComputedStyle(target);
      const trans = getStyle.transform;
      const values = trans.split("(")[1].split(")")[0].split(",");
      const angle = Math.round(
        Math.atan2(values[1], values[0]) * (180 / Math.PI)
      );
      let deg = angle < 0 ? angle + 360 : angle;
      if (movementX) {
        deg += movementX;
      }
      target.style.transform = `rotate(${deg}deg)`;
    };

    const mouseUp = () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      const getStyle = window.getComputedStyle(target);
      const trans = getStyle.transform;
      const values = trans.split("(")[1].split(")")[0].split(",");
      const angle = Math.round(
        Math.atan2(values[1], values[0]) * (180 / Math.PI)
      );
      let deg = angle < 0 ? angle + 360 : angle;
      setRotate(deg);
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };
  const removeComponent = (id) => {
    const temp = components.filter((c) => c.id !== id);
    setCurrentComponent("");
    setComponents(temp);
  };

  const removeBackground = () => {
    const comp = components.find((c) => c.id === currentComponent.id);
    const temp = components.filter((c) => c.id !== currentComponent.id);
    comp.image = "";
    setImage("");
    setComponents([...temp, comp]);
  };

  const [components, setComponents] = useState([
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "main_frame",
      type: "create",
      width: 650,
      height: 450,
      z_index: 1,
      color: "#fff",
      image: "",
      setCurrentComponent: (a) => setCurrentComponent(a),
    },
  ]);

  const createShape = (name, type) => {
    const style = {
      id: components.length + 1,
      name: name,
      type,
      left: 10,
      top: 10,
      opacity: 1,
      width: 200,
      height: 150,
      rotate,
      z_index: 2,
      color: "#3c3c3d",
      setCurrentComponent: (a) => setCurrentComponent(a),
      removeBackground: () => setImage(""),
      moveElement,
      resizeElement,
      rotateElement,
    };
    setComponents([...components, style]);
  };

  useEffect(() => {
    if (currentComponent) {
      const index = components.findIndex((c) => c.id === currentComponent.id);
      const temp = components.filter((c) => c.id !== currentComponent.id);
      if (components.name !== "text") {
        components[index].width = width || currentComponent.width;
        components[index].height = height || currentComponent.height;
        components[index].rotate = rotate || currentComponent.rotate;
      }
      if (currentComponent.name === "main_frame" && image) {
        components[index].image = image || currentComponent.image;
      }
      components[index].color = color || currentComponent.color;
      if (currentComponent.name !== "main_frame") {
        components[index].left = left || currentComponent.left;
        components[index].top = top || currentComponent.top;
      }

      setComponents([...temp, components[index]]);
      setWidth("");
      setHeight("");
      setTop("");
      setLeft("");
      setRotate(0);
    }
  }, [color, image, left, top, width, height]);

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
                <Shapes createShape={createShape} />
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
                <Background setImage={setImage} />
              </div>
            )}
          </div>
          <div className="w-full h-full">
            <div
              className={`relative flex justify-center items-center h-full ${
                !currentComponent
                  ? "w-full"
                  : "w-[clac(100%-250px)] overflow-hidden"
              }`}
            >
              <div className="min-w-[650px] min-h-[480px] flex justify-center items-center overflow-hidden">
                <div
                  id="main_design"
                  className="w-auto h-auto relative overflow-hidden"
                >
                  {components.map((comp, i) => {
                    return (
                      <CreateComponent
                        info={comp}
                        key={i}
                        currentComponent={currentComponent}
                        removeComponent={removeComponent}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {currentComponent && (
              <div className="w-[250px] h-full text-gray-300 bg-[#252627] absolute right-0 top-[60px] px-3 py-2">
                <div className="flex flex-col justify-start items-start gap-3 h-full px-3">
                  <div className="flex justify-start items-start gap-4">
                    <span>Color : </span>
                    <label
                      className="w-[30px] h-[30px] rounded-sm cursor-pointer"
                      style={{
                        background: `${
                          currentComponent.color &&
                          currentComponent.color !== "#fff"
                            ? currentComponent.color
                            : "gray"
                        }`,
                      }}
                      htmlFor="color"
                    ></label>
                    <input
                      onChange={(e) => setColor(e.target.value)}
                      type="color"
                      id="color"
                      className="invisible"
                    />
                  </div>
                  <div>
                    {currentComponent.name === "main_frame" && image && (
                      <div>
                        <button
                          className="bg-slate-700 p-[6px] rounded-sm text-white"
                          onClick={removeBackground}
                        >
                          Remove background
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
