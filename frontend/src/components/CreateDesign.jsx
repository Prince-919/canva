import { useRef } from "react";
import { useLocation } from "react-router-dom";
import CreateComponent from "./CreateComponent";

const CreateDesign = () => {
  const { state } = useLocation();
  const ref = useRef();

  const obj = {
    id: Math.floor(Math.random() * 100 + 1),
    name: "main_frame",
    type: "create",
    width: state.width,
    height: state.height,
    z_index: 1,
    color: "#424242",
    image: "",
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div ref={ref} className="relative w-auto h-auto overflow-auto">
        <CreateComponent info={obj} currectComponent={{}} />
      </div>
    </div>
  );
};

export default CreateDesign;
