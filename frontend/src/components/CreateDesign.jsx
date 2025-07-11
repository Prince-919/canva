import { useRef } from "react";
import { useLocation } from "react-router-dom";
import CreateComponent from "./CreateComponent";

const CreateDesign = () => {
  const { state } = useLocation();

  const ref = useRef();

  const obj = {
    name: "main_frame",
    type: "rect",
    id: Math.floor(Math.random() * 100 + 1),
    height: state?.height,
    width: state?.width,
    z_index: 1,
    color: "#323232",
    image: "",
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div ref={ref} className="relative w-auto h-auto overflow-auto">
        <CreateComponent info={obj} currentComponent={{}} />
      </div>
    </div>
  );
};

export default CreateDesign;
