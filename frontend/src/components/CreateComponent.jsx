import { BsTrash } from "react-icons/bs";
import Element from "./Element";

const CreateComponent = ({ info, currectComponent, removeComponent }) => {
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
        {info.image && (
          <img className="w-full h-full" src={info.image} alt="image" />
        )}
      </div>
    );
  }
  if (info.name === "shape" && info.type === "square") {
    html = (
      <div
        id={randomValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: info.width + "px",
          height: info.height + "px",
          background: info.color,
          opacity: info.opacity,
          left: info.left + "px",
          top: info.top + "px",
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randomValue} info={info} extraId="" />
        {currectComponent?.id !== info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="absolute top-0 bg-white px-3 py-2 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
      </div>
    );
  }
  if (info.name === "shape" && info.type === "circle") {
    html = (
      <div
        id={randomValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randomValue} info={info} extraId={`${randomValue}c`} />
        <div
          id={`${randomValue}c`}
          className="rounded-full"
          style={{
            width: info.width + "px",
            height: info.width + "px",
            background: info.color,
            opacity: info.opacity,
          }}
        ></div>
        {currectComponent?.id !== info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="absolute top-0 bg-white px-3 py-2 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
      </div>
    );
  }
  if (info.name === "shape" && info.type === "trangle") {
    html = (
      <div
        id={randomValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + "px",
          top: info.top + "px",
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : `rotate(0deg)`,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randomValue} info={info} extraId={`${randomValue}t`} />
        <div
          id={`${randomValue}t`}
          style={{
            width: info.width + "px",
            height: info.height + "px",
            background: info.color,
            opacity: info.opacity,
            clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
          }}
        ></div>
        {currectComponent?.id !== info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="absolute top-0 bg-white px-3 py-2 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
      </div>
    );
  }
  return html;
};

export default CreateComponent;
