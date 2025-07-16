import Header from "../components/Header";
import { HiOutlineTemplate, HiTemplate } from "react-icons/hi";
import { BsFolder, BsFillFolderFill } from "react-icons/bs";
import { RiShapesFill, RiShapesLine } from "react-icons/ri";
import { BsCloudUpload, BsCloudUploadFill } from "react-icons/bs";
import { RxText } from "react-icons/rx";
import { CiText } from "react-icons/ci";
import { IoImage, IoImageOutline } from "react-icons/io5";
import { RxTransparencyGrid } from "react-icons/rx";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbBackground } from "react-icons/tb";
import ToolButton from "../components/ToolButton";
import TemplateDesign from "../components/main/TemplateDesign";
import Shapes from "../components/main/Shapes";
import UploadImage from "../components/main/UploadImage";
import Text from "../components/main/Text";
import Projects from "../components/Projects";
import Images from "../components/Images";
import Background from "../components/main/Background";
import CreateComponent from "../components/CreateComponent";
import api from "../api/api";
import { useParams } from "react-router-dom";

const Main = () => {
  const { design_id } = useParams();
  const [state, setState] = useState("");
  const [currentComponent, setCurrentComponent] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rotate, setRotate] = useState(0);
  const [font, setFont] = useState("");
  const [weight, setWeight] = useState("");
  const [padding, setPadding] = useState("");
  const [text, setText] = useState("");
  const [opacity, setOpacity] = useState("");
  const [zIndex, setzIndex] = useState("");
  const [radius, setRadius] = useState(0);
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

  const [components, setComponents] = useState([
    {
      name: "main_frame",
      type: "rect",
      id: Math.floor(Math.random() * 100 + 1),
      height: 500,
      width: 650,
      z_index: 1,
      color: "#fff",
      image: "",
      setCurrentComponent: (a) => setCurrentComponent(a),
    },
  ]);

  useEffect(() => {
    if (currentComponent) {
      const index = components.findIndex((c) => c.id === currentComponent.id);
      const temp = components.filter((c) => c.id !== currentComponent.id);
      if (currentComponent.name !== "text") {
        components[index].width = width || currentComponent.width;
        components[index].height = height || currentComponent.height;
        components[index].rotate = rotate || currentComponent.rotate;
      }
      if (currentComponent.name === "text") {
        components[index].font = font || currentComponent.font;
        components[index].padding = padding || currentComponent.padding;
        components[index].weight = weight || currentComponent.weight;
        components[index].title = text || currentComponent.title;
      }
      if (currentComponent.name === "image") {
        components[index].radius = radius || currentComponent.radius;
      }
      if (currentComponent.name === "main_frame" && image) {
        components[index].image = image || currentComponent.image;
      }
      if (currentComponent.name !== "main_frame") {
        components[index].left = left || currentComponent.left;
        components[index].top = top || currentComponent.top;
        components[index].opacity = opacity || currentComponent.opacity;
        components[index].z_index = zIndex || currentComponent.z_index;
      }
      components[index].color = color || currentComponent.color;

      setComponents([...temp, components[index]]);
      setColor("");
      setLeft("");
      setTop("");
      setWidth("");
      setHeight("");
      setRotate(0);
      setOpacity("");
      setzIndex("");
      setText("");
    }
  }, [
    color,
    image,
    left,
    top,
    width,
    height,
    opacity,
    zIndex,
    padding,
    font,
    weight,
    text,
    radius,
  ]);

  const getDesign = async () => {
    try {
      const { data } = await api.get(`/api/design/${design_id}`);
      const { design } = data;
      for (let i = 0; i < design.length; i++) {
        design[i].setCurrentComponent = (a) => setCurrentComponent(a);
        design[i].moveElement = moveElement;
        design[i].resizeElement = resizeElement;
        design[i].rotateElement = rotateElement;
        design[i].removeBackground = removeBackground;
      }
      setComponents(design);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDesign();
  }, []);

  const moveElement = (id, currentInfo) => {
    setCurrentComponent(currentInfo);
    let isMoving = true;
    const currentDiv = document.getElementById(id);

    function mouseMove({ movementX, movementY }) {
      const getStyle = window.getComputedStyle(currentDiv);
      const left = parseInt(getStyle.left);
      const top = parseInt(getStyle.top);
      if (isMoving) {
        currentDiv.style.left = `${left + movementX}px`;
        currentDiv.style.top = `${top + movementY}px`;
      }
    }
    function mouseUp() {
      let isMoving = false;
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      setLeft(parseInt(currentDiv.style.left));
      setTop(parseInt(currentDiv.style.top));
    }
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };
  const resizeElement = (id, currentInfo) => {
    setCurrentComponent(currentInfo);
    let isMoving = true;
    const currentDiv = document.getElementById(id);

    function mouseMove({ movementX, movementY }) {
      const getStyle = window.getComputedStyle(currentDiv);
      const width = parseInt(getStyle.width);
      const height = parseInt(getStyle.height);
      if (isMoving) {
        currentDiv.style.width = `${width + movementX}px`;
        currentDiv.style.height = `${height + movementY}px`;
      }
    }
    function mouseUp() {
      let isMoving = false;
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      setWidth(parseInt(currentDiv.style.width));
      setHeight(parseInt(currentDiv.style.height));
    }
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  const rotateElement = (id, currentInfo) => {
    setCurrentComponent("");
    setCurrentComponent(currentInfo);
    const target = document.getElementById(id);

    function mouseMove({ movementX, movementY }) {
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
    }
    function mouseUp() {
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
    }

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };
  const removeComponent = (id) => {
    const temp = components.filter((c) => c.id !== id);
    setCurrentComponent("");
    setComponents(temp);
  };
  const removeBackground = () => {
    const com = components.find((c) => c.id === currentComponent.id);
    const temp = components.filter((c) => c.id !== currentComponent.id);
    com.image = "";
    setImage("");
    setComponents([...temp, com]);
  };

  const opacityHandler = (e) => {
    setOpacity(parseFloat(e.target.value));
  };

  const createShape = (name, type) => {
    const style = {
      id: Date.now(),
      name,
      type,
      left: 10,
      top: 10,
      opacity: 1,
      width: 150,
      height: 120,
      rotate,
      z_index: 2,
      color: "#3c3c3d",
      setCurrentComponent: (a) => setCurrentComponent(a),
      moveElement,
      resizeElement,
      rotateElement,
    };
    setComponents([...components, style]);
  };

  const addText = (name, type) => {
    const style = {
      id: Date.now(),
      name,
      type,
      left: 10,
      top: 10,
      opacity: 1,
      rotate,
      z_index: 10,
      padding: 6,
      font: 22,
      title: "Add your text",
      weight: 400,
      color: "#3c3c3d",
      setCurrentComponent: (a) => setCurrentComponent(a),
      moveElement,
      resizeElement,
      rotateElement,
    };
    setWeight("");
    setFont("");
    setCurrentComponent(style);
    setComponents([...components, style]);
  };
  const addImage = (img) => {
    setCurrentComponent("");
    const style = {
      id: Date.now(),
      name: "image",
      type: "image",
      left: 10,
      top: 10,
      width: 150,
      height: 120,
      opacity: 1,
      rotate,
      z_index: 2,
      radius: 0,
      image: img,
      setCurrentComponent: (a) => setCurrentComponent(a),
      moveElement,
      resizeElement,
      rotateElement,
    };

    setCurrentComponent(style);
    setComponents([...components, style]);
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
            {state === "shape" && (
              <div className="grid grid-cols-3 gap-2">
                <Shapes createShape={createShape} />
              </div>
            )}
            {state === "image" && <UploadImage />}
            {state === "text" && (
              <div className="grid grid-cols-1 gap-2">
                <Text addText={addText} />
              </div>
            )}
            {state === "project" && <Projects />}
            {state === "initImage" && (
              <div className="h-[88vh] w-full flex justify-start items-start scrollbar-hide overflow-x-auto">
                <Images addImage={addImage} />
              </div>
            )}
            {state === "background" && <Background setImage={setImage} />}
          </div>
          <div className="w-full h-full flex">
            <div
              className={`flex justify-center items-center relative h-full ${
                !currentComponent
                  ? "w-full"
                  : "w-[calc(100%-250px)] overflow-hidden"
              }`}
            >
              <div className="m-w-[650px] m-h-[500px] flex justify-center items-center overflow-hidden">
                <div
                  id="main_design"
                  className="w-auto relative h-auto overflow-hidden"
                >
                  {components.map((c, i) => (
                    <CreateComponent
                      key={i}
                      info={c}
                      currentComponent={currentComponent}
                      removeComponent={removeComponent}
                    />
                  ))}
                </div>
              </div>
            </div>
            {currentComponent && (
              <div className="bg-[#252627] h-full w-[250px] text-gray-300 px-3 py-2">
                <div className="flex gap-6 flex-col h-full items-start justify-start px-3">
                  <div className="flex gap-4 items-start justify-start mt-3">
                    <span className="tracking-tight">Color : </span>
                    <label
                      htmlFor="color"
                      className="w-[30px] h-[30px] rounded-sm cursor-pointer"
                      style={{
                        background: `${
                          currentComponent.color &&
                          currentComponent.color !== "#fff"
                            ? currentComponent.color
                            : "gray"
                        }`,
                      }}
                    ></label>
                    <input
                      type="color"
                      id="color"
                      onChange={(e) => setColor(e.target.value)}
                      className="invisible"
                    />
                  </div>
                  {currentComponent.name === "main_frame" &&
                    currentComponent.image && (
                      <div
                        onClick={removeBackground}
                        className="bg-slate-600 p-[6px] text-white tracking-tight rounded-sm cursor-pointer"
                      >
                        Remove background
                      </div>
                    )}
                  {currentComponent.name !== "main_frame" && (
                    <div className="flex flex-col gap-6">
                      <div className="flex justify-start items-start gap-1">
                        <span className="tracking-tight w-[70px]">
                          Opacity :
                        </span>
                        <input
                          onChange={opacityHandler}
                          type="number"
                          className="w-[70px] outline-none bg-transparent border border-gray-700 px-2 rounded-sm"
                          step={0.1}
                          min={0.1}
                          max={1}
                          value={currentComponent.opacity}
                        />
                      </div>
                      <div className="flex justify-start items-start gap-1">
                        <span className="tracking-tight w-[70px]">
                          Z-Index :
                        </span>
                        <input
                          onChange={(e) => setzIndex(e.target.value)}
                          type="number"
                          className="w-[70px] outline-none bg-transparent border border-gray-700 px-2 rounded-sm"
                          step={1}
                          value={currentComponent.z_index}
                        />
                      </div>
                      {currentComponent.name === "image" && (
                        <div className="flex justify-start items-start gap-1">
                          <span className="tracking-tight w-[70px]">
                            Radius :
                          </span>
                          <input
                            onChange={(e) => setRadius(e.target.value)}
                            type="number"
                            className="w-[70px] outline-none bg-transparent border border-gray-700 px-2 rounded-sm"
                            step={1}
                            value={currentComponent.radius}
                          />
                        </div>
                      )}
                      {currentComponent.name === "text" && (
                        <>
                          <div className="flex justify-start items-start gap-1">
                            <span className="tracking-tight w-[70px]">
                              Padding :
                            </span>
                            <input
                              onChange={(e) => setPadding(e.target.value)}
                              type="number"
                              className="w-[70px] outline-none bg-transparent border border-gray-700 px-2 rounded-sm"
                              step={1}
                              value={currentComponent.padding}
                            />
                          </div>
                          <div className="flex justify-start items-start gap-1">
                            <span className="tracking-tight w-[70px]">
                              Font size :
                            </span>
                            <input
                              onChange={(e) => setFont(e.target.value)}
                              type="number"
                              className="w-[70px] outline-none bg-transparent border border-gray-700 px-2 rounded-sm"
                              step={1}
                              value={currentComponent.font}
                            />
                          </div>
                          <div className="flex justify-start items-start gap-1">
                            <span className="tracking-tight w-[70px]">
                              Weight :
                            </span>
                            <input
                              onChange={(e) => setWeight(e.target.value)}
                              type="number"
                              className="w-[70px] outline-none bg-transparent border border-gray-700 px-2 rounded-sm"
                              step={100}
                              min={100}
                              max={900}
                              value={currentComponent.weight}
                            />
                          </div>
                          <div className="flex flex-col justify-start items-start gap-2">
                            <input
                              onChange={(e) =>
                                setCurrentComponent({
                                  ...currentComponent,
                                  title: e.target.value,
                                })
                              }
                              type="text"
                              className="border border-gray-700 bg-transparent outline-none rounded-sm p-2"
                              value={currentComponent.title}
                            />
                            <button
                              onClick={() => setText(currentComponent.title)}
                              className="bg-purple-500 tracking-tight px-4 py-2 rounded-sm text-sm text-white"
                            >
                              Add Text
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
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
