import { Link } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import api from "../api/api";
import { useState } from "react";
import toast from "react-hot-toast";

const Header = ({ components, design_id }) => {
  const [loader, setLoader] = useState(false);

  const downloadImage = async () => {
    try {
      const getDiv = document.getElementById("main_design");
      const dataUrl = await htmlToImage.toPng(getDiv, {
        style: { transform: "scale(1)" },
      });

      const link = document.createElement("a");
      link.download = "image.png";
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  };

  const saveImage = async () => {
    const getDiv = document.getElementById("main_design");
    const image = await htmlToImage.toBlob(getDiv);

    if (image) {
      const obj = {
        design: components,
      };
      const formData = new FormData();
      formData.append("design", JSON.stringify(obj));
      formData.append("image", image);
      try {
        setLoader(true);
        const { data } = await api.put(
          `/api/update-design/${design_id}`,
          formData
        );
        toast.success(data.message);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="h-[60px] w-full bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c]">
      <div className="h-full flex justify-between items-center px-10 text-gray-400">
        <Link to={"/"}>
          <div className="w-[100px] h-[48px]">
            <img
              className="w-full h-full object-cover"
              src="/main-logo.png"
              alt="logo"
            />
          </div>
        </Link>
        <div className="flex justify-center items-center text-[#efefef] gap-2">
          <button
            disabled={loader}
            onClick={saveImage}
            className="px-2 py-[6px] bg-[rgba(3,188,206,1)] hover:opacity-95 rounded-sm"
          >
            {loader ? "Saving" : "Save"}
          </button>
          <button
            onClick={downloadImage}
            className="px-2 py-[6px] bg-[rgba(123,42,232,1)] hover:opacity-95 rounded-sm"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
