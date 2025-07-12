import { LuTrash2 } from "react-icons/lu";

const CreateComponent = ({ info, currentComponent, removeComponent }) => {
  const randomValue = Math.floor(Math.random() * 100);
  let html = "";
  if (info.name === "main_frame") {
    html = (
      <div
        onClick={() => info.setCurrentComponent(info)}
        className="hover:border-[2px] hover:border-indigo-500 shadow-md"
        style={{
          width: info.width + "px",
          height: info.height + "px",
          background: info.color,
          zIndex: info.z_index,
        }}
      >
        {info.image && <img src={info.image} alt="image" />}
      </div>
    );
  }
  if (info.name === "shape" && info.type === "rect") {
    html = (
      <div
        id={randomValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: info.width + "px",
          height: info.height + "px",
          top: info.top + "px",
          left: info.left + "px",
          opacity: info.opacity,
          zIndex: info.z_index,
          background: info.color,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        {currentComponent.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 absolute bg-white hover:text-red-500 top-0 hidden group-hover:block cursor-pointer rounded-sm"
          >
            <LuTrash2 />
          </div>
        )}
      </div>
    );
  }
  return html;
};

export default CreateComponent;
