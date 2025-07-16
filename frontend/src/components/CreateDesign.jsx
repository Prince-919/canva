import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateComponent from "./CreateComponent";
import * as htmlToImage from "html-to-image";
import api from "../api/api";
import { RotateLoader } from "react-spinners";

const CreateDesign = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const ref = useRef();
  const [loader, setLoader] = useState(false);
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

  const create_design = async () => {
    const image = await htmlToImage.toBlob(ref.current);
    const design = JSON.stringify(obj);
    if (image) {
      const formData = new FormData();
      formData.append("design", design);
      formData.append("image", image);
      try {
        setLoader(true);
        const { data } = await api.post("/api/create-design", formData);
        navigate(`/design/${data.design._id}/edit`);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        console.log(error.response.data);
      }
    }
  };

  useEffect(() => {
    if (state && ref.current) {
      create_design();
    } else {
      navigate("/");
    }
  }, [state, ref]);

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div ref={ref} className="relative w-auto h-auto overflow-auto">
        <CreateComponent info={obj} currentComponent={{}} />
      </div>
      {loader && (
        <div className="absolute bg-black left-0 top-0 h-full w-full flex justify-center items-center">
          <RotateLoader color="white" />
        </div>
      )}
    </div>
  );
};

export default CreateDesign;
